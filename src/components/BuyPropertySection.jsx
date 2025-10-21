// BuyPropertyFlow.jsx
import React, { useState, useEffect } from "react";
import lekki from "../assets/lekki (1).jpg";
import greenpark from "../assets/greenPark.jpg";

/**
 * Single-file implementation of the Buy Property flow.
 * - Drop into your routes / page and render <BuyPropertyFlow />
 *
 * Notes:
 * - No external toast library required; a tiny in-file toast is implemented.
 * - All currency formatted in NGN with Intl.
 */

const SAMPLE_LOCATIONS = [
  {
    id: 1,
    name: "Lekki Pearl Estate",
    image: lekki,
    description:
      "Lekki Pearl is one of Alphamead's flagship estates, located in the heart of Lekki. It offers premium residential spaces with modern infrastructure and top-notch security.",
    propertyTypes: [
      {
        id: "apartments",
        name: "Apartments",
        stock: 5,
        listings: [
          { id: "A-1", price: 75_000_000, images: [] },
          { id: "A-2", price: 77_000_000, images: [] },
          { id: "A-3", price: 76_000_000, images: [] },
        ],
      },
      {
        id: "terraces",
        name: "Terraces",
        stock: 3,
        listings: [
          { id: "T-1", price: 120_000_000, images: [] },
          { id: "T-2", price: 118_000_000, images: [] },
        ],
      },
      {
        id: "semi-detached",
        name: "Semi-Detached",
        stock: 0,
        listings: [],
      },
      {
        id: "detached",
        name: "Detached",
        stock: 2,
        listings: [
          { id: "D-1", price: 180_000_000, images: [] },
          { id: "D-2", price: 185_000_000, images: [] },
        ],
      },
      {
        id: "lands",
        name: "Lands",
        stock: 4,
        pricePerSqm: 65_000,
        listings: [
          { id: "L-01", sizeSqm: 500, images: [] },
          { id: "L-02", sizeSqm: 750, images: [] },
          { id: "L-03", sizeSqm: 1000, images: [] },
          { id: "L-04", sizeSqm: 625, images: [] },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Green Park Homes",
    image: greenpark,
    description:
      "Green Park Homes is a serene gated community designed for families who value comfort, security, and sustainability.",
    propertyTypes: [
      {
        id: "terraces",
        name: "Terraces",
        stock: 6,
        listings: [
          { id: "GP-T1", price: 95_000_000, images: [] },
          { id: "GP-T2", price: 97_000_000, images: [] },
          { id: "GP-T3", price: 96_500_000, images: [] },
          { id: "GP-T4", price: 98_000_000, images: [] },
          { id: "GP-T5", price: 99_000_000, images: [] },
          { id: "GP-T6", price: 100_000_000, images: [] },
        ],
      },
      {
        id: "detached",
        name: "Detached",
        stock: 1,
        listings: [{ id: "GP-D1", price: 160_000_000, images: [] }],
      },
      {
        id: "lands",
        name: "Lands",
        stock: 4,
        pricePerSqm: 65_000,
        listings: [
          { id: "GP-L1", sizeSqm: 400, images: [] },
          { id: "GP-L2", sizeSqm: 600, images: [] },
          { id: "GP-L3", sizeSqm: 450, images: [] },
          { id: "GP-L4", sizeSqm: 550, images: [] },
        ],
      },
    ],
  },
];

const currency = (v) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(v || 0);

// tiny internal toast component
const Toast = ({ message, show }) => {
  if (!show) return null;
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
        {message}
      </div>
    </div>
  );
};

const BuyPropertySection = () => {
  const [locations] = useState(SAMPLE_LOCATIONS);

  // primary steps: locations -> locationDetails -> types -> listings -> details -> payment -> confirmation
  const [step, setStep] = useState("locations");

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null); // a specific listing (or land listing)
  const [quantity, setQuantity] = useState(1);

  // payment
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [planMonths, setPlanMonths] = useState(null);
  const [mortgageProvider, setMortgageProvider] = useState(null);
  const [dob, setDob] = useState("");

  // inspection (required before submit)
  const [inspection, setInspection] = useState({
    fullName: "",
    email: "",
    date: "",
    notes: "",
  });

  const [toast, setToast] = useState({ show: false, message: "" });
  const [submitted, setSubmitted] = useState(false);

  // calculated values
  const availableStock = selectedType ? selectedType.stock : 0;
  const isLandType = selectedType && selectedType.id === "lands";
  const selectedListingPrice = (() => {
    if (!selectedListing) return 0;
    // if lands: calculate using pricePerSqm * sizeSqm
    if (isLandType) {
      return (selectedType.pricePerSqm || 0) * (selectedListing.sizeSqm || 0);
    }
    // else listing has .price
    return selectedListing.price || 0;
  })();

  const totalPrice = selectedListingPrice * quantity;

  // Payment plan calculations (30% deposit example)
  const depositRate = 0.3;
  const deposit = totalPrice * depositRate;
  const balanceAfterDeposit = totalPrice - deposit;
  const monthlyPayment = planMonths
    ? balanceAfterDeposit / planMonths
    : 0;

  // Mortgage quick estimation: placeholder interest rates by provider
  const mortgageRates = {
    MREIF: 0.06,
    NHF: 0.05,
    "Bank 1": 0.09,
    "Bank 2": 0.085,
  };

  const estimatedMortgage = (provider, tenureYears = 10) => {
    // simple annuity monthly payment estimate
    const principal = totalPrice;
    const annualRate = mortgageRates[provider] || 0.08;
    const monthlyRate = annualRate / 12;
    const n = tenureYears * 12;
    if (monthlyRate === 0) return principal / n;
    const payment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    return payment;
  };

  // small UX helpers
  useEffect(() => {
    if (toast.show) {
      const t = setTimeout(() => setToast({ show: false, message: "" }), 4200);
      return () => clearTimeout(t);
    }
  }, [toast.show]);

  // Validation: enable submit only when inspection fields are present
  const canSubmit =
    inspection.fullName.trim() &&
    /\S+@\S+\.\S+/.test(inspection.email) &&
    inspection.date &&
    selectedListing;

  // helpers to reset deeper state when going back
  const selectLocation = (loc) => {
    setSelectedLocation(loc);
    setSelectedType(null);
    setSelectedListing(null);
    setStep("locationDetails");
  };
  const openType = (type) => {
    setSelectedType(type);
    setSelectedListing(null);
    setStep("listings");
  };
  const openListing = (listing) => {
    setSelectedListing(listing);
    setQuantity(1);
    setStep("details");
  };

  // submit handler
  const handleFinalSubmit = () => {
    if (!canSubmit) {
      setToast({
        show: true,
        message: "Please complete the inspection details and choose a listing before submitting.",
      });
      return;
    }

    // simulate submit
    setSubmitted(true);
    setToast({
      show: true,
      message: "Thank you. A member of our sales team will contact you shortly.",
    });

    // you would send selectedLocation, selectedType, selectedListing, payment details, inspection to your backend here.

    // scroll to top where confirmation is visible
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // UI pieces for each step
  return (
    <section className="py-12 bg-white">
      <Toast message={toast.message} show={toast.show} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header / breadcrumbs */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Buy / Rent / Rent-to-Own
          </h1>
          <div className="text-sm text-gray-600">Step: {step}</div>
        </div>

        {/* Confirmation after submit */}
        {submitted && (
          <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-6">
            <h2 className="text-lg font-semibold text-green-700">Submission received</h2>
            <p className="text-gray-700 mt-2">
              Thank you — a member of our sales team will contact you shortly to follow up on your enquiry.
            </p>
          </div>
        )}

        {/* ----------------- STEP: locations ----------------- */}
        {step === "locations" && (
          <>
            <h2 className="text-xl font-bold mb-4">Available Locations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div
                    className="w-full h-44 bg-gray-100 overflow-hidden"
                    onClick={() => selectLocation(loc)}
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{loc.name}</h3>
                    <p className="text-gray-600 text-sm my-2 line-clamp-3">
                      {loc.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => selectLocation(loc)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
                      >
                        View Location
                      </button>
                      <div className="text-sm text-gray-600">{loc.propertyTypes.length} property types</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ----------------- STEP: locationDetails ----------------- */}
        {step === "locationDetails" && selectedLocation && (
          <>
            <button
              className="text-green-600 mb-4 inline-block"
              onClick={() => {
                setSelectedLocation(null);
                setStep("locations");
              }}
            >
              ← Back to Locations
            </button>

            <div className="rounded-xl overflow-hidden border mb-6">
              <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-64 object-cover" />
            </div>

            <h2 className="text-2xl font-bold">{selectedLocation.name}</h2>
            <p className="text-gray-700 mb-6">{selectedLocation.description}</p>

            <div className="text-center">
              <button
                onClick={() => setStep("types")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                View Available Property Types
              </button>
            </div>
          </>
        )}

        {/* ----------------- STEP: types ----------------- */}
        {step === "types" && selectedLocation && (
          <>
            <button className="text-green-600 mb-4 inline-block" onClick={() => setStep("locationDetails")}>
              ← Back to {selectedLocation.name}
            </button>

            <h2 className="text-xl font-bold mb-4">Property Types in {selectedLocation.name}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedLocation.propertyTypes.map((type) => (
                <div
                  key={type.id}
                  className={`border rounded-xl p-5 text-center transition ${type.stock === 0 ? "opacity-50 cursor-not-allowed" : "hover:shadow-md cursor-pointer"}`}
                >
                  <h4 className="text-lg font-semibold">{type.name}</h4>
                  <p className="text-sm mt-2 text-gray-600">
                    {type.stock > 0 ? `${type.stock} available` : "Sold Out"}
                  </p>
                  {type.pricePerSqm && (
                    <p className="text-green-700 font-semibold mt-2">From {currency(type.pricePerSqm)}/sqm</p>
                  )}
                  <div className="mt-4">
                    <button
                      disabled={type.stock === 0}
                      onClick={() => openType(type)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition disabled:opacity-50"
                    >
                      View Listings
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ----------------- STEP: listings ----------------- */}
        {step === "listings" && selectedType && selectedLocation && (
          <>
            <button className="text-green-600 mb-4 inline-block" onClick={() => setStep("types")}>← Back to Property Types</button>

            <h2 className="text-2xl font-bold mb-4">{selectedType.name} - {selectedLocation.name}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* For lands, show size & calculated price for each listing */}
              {selectedType.listings.map((l) => {
                const price = isLandType ? (selectedType.pricePerSqm * (l.sizeSqm || 0)) : (l.price || 0);
                return (
                  <div key={l.id} className="border rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-800">{isLandType ? `${selectedType.name} ${l.id}` : `${selectedType.name} ${l.id}`}</h4>
                    <p className="text-gray-600 mt-2">
                      {isLandType ? `${l.sizeSqm || "-"} sqm` : "Unit"}
                    </p>
                    <p className="text-green-700 font-semibold mt-3">{currency(price)}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => openListing(l)}
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          // quick selection: open details and prefill quantity 1
                          openListing(l);
                          setQuantity(1);
                        }}
                        className="px-3 py-2 border rounded-lg text-sm"
                      >
                        Quick Select
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ----------------- STEP: details ----------------- */}
        {step === "details" && selectedListing && selectedType && selectedLocation && (
          <>
            <button className="text-green-600 mb-4 inline-block" onClick={() => setStep("listings")}>← Back to Listings</button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden mb-6">
                  {/* placeholder image area - listing images could be passed */}
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">Listing images</div>
                </div>

                <h2 className="text-2xl font-bold">{selectedType.name} - {selectedListing.id}</h2>
                <p className="text-gray-700 mt-2 mb-4">{selectedLocation.name} • {selectedType.name}</p>

                {isLandType && (
                  <p className="text-gray-700">
                    Size: <strong>{selectedListing.sizeSqm} sqm</strong> • Price per sqm: <strong>{currency(selectedType.pricePerSqm)}</strong>
                  </p>
                )}

                {!isLandType && (
                  <p className="text-gray-700">Unit Price: <strong>{currency(selectedListing.price)}</strong></p>
                )}

                <div className="mt-6">
                  <label className="block text-sm text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 border rounded"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={selectedType.stock}
                      value={quantity}
                      onChange={(e) => {
                        const v = Math.max(1, Math.min(Number(e.target.value || 1), selectedType.stock));
                        setQuantity(v);
                      }}
                      className="w-24 text-center border rounded p-2"
                    />
                    <button
                      onClick={() => setQuantity((q) => Math.min(selectedType.stock, q + 1))}
                      className="px-3 py-2 border rounded"
                    >
                      +
                    </button>

                    <div className="ml-auto text-sm text-gray-600">
                      {selectedType.stock} available
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-lg">Total: <strong className="text-green-700">{currency(totalPrice)}</strong></p>
                </div>
              </div>

              {/* Right column: proceed to payment */}
              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="font-semibold mb-3">Proceed</h3>
                <p className="text-sm text-gray-600 mb-4">Choose a payment option to proceed. You will be required to provide inspection details before final submission.</p>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setPaymentMethod("Outright");
                      setStep("payment");
                    }}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Outright Purchase
                  </button>
                  <button
                    onClick={() => {
                      setPaymentMethod("Plan");
                      setStep("payment");
                    }}
                    className="w-full border px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    Payment Plan
                  </button>
                  <button
                    onClick={() => {
                      setPaymentMethod("Mortgage");
                      setStep("payment");
                    }}
                    className="w-full border px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    Mortgage Options
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ----------------- STEP: payment ----------------- */}
        {step === "payment" && selectedListing && (
          <>
            <button className="text-green-600 mb-4 inline-block" onClick={() => setStep("details")}>← Back to Details</button>

            <h2 className="text-2xl font-semibold mb-4">Payment: {paymentMethod}</h2>

            {/* Show details common to all */}
            <div className="rounded-xl border p-6 mb-6">
              <p className="text-gray-700">Selected: <strong>{selectedType.name} • {selectedListing.id}</strong></p>
              <p className="text-gray-700">Quantity: <strong>{quantity}</strong></p>
              <p className="text-green-700 font-semibold">Total price: <strong>{currency(totalPrice)}</strong></p>
            </div>

            {/* Outright */}
            {paymentMethod === "Outright" && (
              <div className="rounded-xl border p-6 mb-6">
                <h3 className="font-semibold mb-3">Outright Purchase</h3>
                <p className="text-sm text-gray-600 mb-3">Pay the full amount now.</p>

                <div className="flex gap-3 items-center mb-4">
                  <button
                    onClick={() => {
                      // ensure quantity doesn't exceed stock
                      if (quantity > selectedType.stock) setQuantity(selectedType.stock);
                      setQuantity((q) => Math.max(1, q));
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Confirm amount
                  </button>
                  <div className="text-sm text-gray-600">Max quantity allowed: {selectedType.stock}</div>
                </div>

                {/* Inspection form (required before final submit) */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Book Inspection (required)</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <input
                      value={inspection.fullName}
                      onChange={(e) => setInspection({ ...inspection, fullName: e.target.value })}
                      className="border rounded p-2"
                      placeholder="Full name"
                    />
                    <input
                      value={inspection.email}
                      onChange={(e) => setInspection({ ...inspection, email: e.target.value })}
                      className="border rounded p-2"
                      placeholder="Email"
                    />
                    <input
                      type="date"
                      value={inspection.date}
                      onChange={(e) => setInspection({ ...inspection, date: e.target.value })}
                      className="border rounded p-2"
                    />
                    <textarea
                      value={inspection.notes}
                      onChange={(e) => setInspection({ ...inspection, notes: e.target.value })}
                      className="border rounded p-2"
                      placeholder="Notes (optional)"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    disabled={!canSubmit}
                    onClick={handleFinalSubmit}
                    className={`px-6 py-2 rounded-lg font-semibold ${canSubmit ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                  >
                    Submit Purchase
                  </button>
                  <button onClick={() => setStep("details")} className="px-4 py-2 border rounded-lg">Cancel</button>
                </div>
              </div>
            )}

            {/* Payment Plan */}
            {paymentMethod === "Plan" && (
              <div className="rounded-xl border p-6 mb-6">
                <h3 className="font-semibold mb-3">Payment Plan</h3>
                <p className="text-sm text-gray-600 mb-3">Choose a schedule and pay deposit (30%) then monthly instalments.</p>

                <div className="flex gap-3 mb-4">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setPlanMonths(m)}
                      className={`px-4 py-2 rounded-lg ${planMonths === m ? "bg-green-600 text-white" : "border hover:bg-gray-50"}`}
                    >
                      {m} months
                    </button>
                  ))}
                </div>

                {planMonths && (
                  <div className="mb-4">
                    <p>Deposit ({Math.round(depositRate * 100)}%): <strong>{currency(deposit)}</strong></p>
                    <p>Balance after deposit: <strong>{currency(balanceAfterDeposit)}</strong></p>
                    <p>Monthly payment ({planMonths} months): <strong className="text-green-700">{currency(monthlyPayment)}</strong></p>
                    <p className="text-sm text-gray-500 mt-2">Next payment due: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>

                    {/* Inspection (required) */}
                    <div className="my-4">
                      <h4 className="font-semibold mb-2">Book Inspection (required)</h4>
                      <input value={inspection.fullName} onChange={(e) => setInspection({ ...inspection, fullName: e.target.value })} placeholder="Full name" className="w-full border rounded p-2 mb-2" />
                      <input value={inspection.email} onChange={(e) => setInspection({ ...inspection, email: e.target.value })} placeholder="Email" className="w-full border rounded p-2 mb-2" />
                      <input type="date" value={inspection.date} onChange={(e) => setInspection({ ...inspection, date: e.target.value })} className="w-full border rounded p-2 mb-2" />
                      <textarea value={inspection.notes} onChange={(e) => setInspection({ ...inspection, notes: e.target.value })} className="w-full border rounded p-2" placeholder="Notes (optional)" />
                    </div>

                    <div className="flex gap-3">
                      <button disabled={!canSubmit} onClick={handleFinalSubmit} className={`px-6 py-2 rounded-lg font-semibold ${canSubmit ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"}`}>Submit Plan</button>
                      <button onClick={() => setStep("details")} className="px-4 py-2 border rounded-lg">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mortgage */}
            {paymentMethod === "Mortgage" && (
              <div className="rounded-xl border p-6 mb-6">
                <h3 className="font-semibold mb-3">Mortgage</h3>
                <p className="text-sm text-gray-600 mb-3">Choose a mortgage provider to see a rough estimate of monthly repayment (illustrative).</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {["MREIF", "NHF", "Bank 1", "Bank 2"].map((p) => (
                    <button key={p} onClick={() => setMortgageProvider(p)} className={`px-4 py-2 rounded-lg ${mortgageProvider === p ? "bg-green-600 text-white" : "border hover:bg-gray-50"}`}>{p}</button>
                  ))}
                </div>

                {mortgageProvider && (
                  <div className="mb-4">
                    <p>Selected: <strong>{mortgageProvider}</strong></p>
                    <p className="text-gray-700 mt-2">Estimated monthly repayment (10-year example): <strong className="text-green-700">{currency(estimatedMortgage(mortgageProvider, 10))}</strong></p>

                    {/* Capture DOB (you asked) */}
                    <div className="mt-4">
                      <label className="block text-sm text-gray-700 mb-2">Date of birth</label>
                      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="border rounded p-2" />
                    </div>

                    {/* Inspection (required) */}
                    <div className="my-4">
                      <h4 className="font-semibold mb-2">Book Inspection (required)</h4>
                      <input value={inspection.fullName} onChange={(e) => setInspection({ ...inspection, fullName: e.target.value })} placeholder="Full name" className="w-full border rounded p-2 mb-2" />
                      <input value={inspection.email} onChange={(e) => setInspection({ ...inspection, email: e.target.value })} placeholder="Email" className="w-full border rounded p-2 mb-2" />
                      <input type="date" value={inspection.date} onChange={(e) => setInspection({ ...inspection, date: e.target.value })} className="w-full border rounded p-2 mb-2" />
                      <textarea value={inspection.notes} onChange={(e) => setInspection({ ...inspection, notes: e.target.value })} className="w-full border rounded p-2" placeholder="Notes (optional)" />
                    </div>

                    <div className="flex gap-3">
                      <button disabled={!canSubmit || !dob} onClick={handleFinalSubmit} className={`px-6 py-2 rounded-lg font-semibold ${canSubmit && dob ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"}`}>Submit Mortgage Request</button>
                      <button onClick={() => setStep("details")} className="px-4 py-2 border rounded-lg">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BuyPropertySection;
