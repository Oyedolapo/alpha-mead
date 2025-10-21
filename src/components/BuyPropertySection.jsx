// BuyPropertySection.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import lekki from "../assets/lekki (1).jpg";
import greenpark from "../assets/greenPark.jpg";

const locations = [
  {
    id: 1,
    name: "Lekki Pearl Estate",
    image: lekki,
    description:
      "Lekki Pearl is one of Alphamead's flagship estates, located in the heart of Lekki. It offers premium residential spaces with modern infrastructure and top-notch security.",
    propertyTypes: [
      {
        name: "Apartments",
        stock: 5,
        listings: [
          { id: 1, price: 75000000, title: "Apt 101", description: "2-bed apartment, 95m²" },
          { id: 2, price: 77000000, title: "Apt 102", description: "3-bed apartment, 120m²" },
          { id: 3, price: 76000000, title: "Apt 103", description: "2-bed apartment, 100m²" },
        ],
      },
      {
        name: "Terraces",
        stock: 3,
        listings: [
          { id: 1, price: 120000000, title: "Terrace A", description: "3-bed terrace" },
          { id: 2, price: 118000000, title: "Terrace B", description: "3-bed terrace" },
        ],
      },
      { name: "Semi-Detached", stock: 0, listings: [] },
      {
        name: "Detached",
        stock: 2,
        listings: [
          { id: 1, price: 180000000, title: "Detached 1", description: "4-bed detached" },
          { id: 2, price: 185000000, title: "Detached 2", description: "4-bed detached" },
        ],
      },
      {
        name: "Lands",
        stock: 4,
        listings: [
          // for lands we'll include sqm so we can compute price-per-sqm display
          { id: 1, pricePerSqm: 650000, sqm: 100, title: "Plot 1", description: "Corner plot, 100m²" },
          { id: 2, pricePerSqm: 680000, sqm: 120, title: "Plot 2", description: "Corner plot, 120m²" },
          { id: 3, pricePerSqm: 670000, sqm: 90, title: "Plot 3", description: "Inner plot, 90m²" },
          { id: 4, pricePerSqm: 690000, sqm: 110, title: "Plot 4", description: "Corner plot, 110m²" },
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
        name: "Terraces",
        stock: 6,
        // ensure listings length matches stock (we create 6 listings)
        listings: [
          { id: 1, price: 95000000, title: "Terrace 1", description: "3-bed terrace" },
          { id: 2, price: 97000000, title: "Terrace 2", description: "3-bed terrace" },
          { id: 3, price: 96000000, title: "Terrace 3", description: "3-bed terrace" },
          { id: 4, price: 95500000, title: "Terrace 4", description: "3-bed terrace" },
          { id: 5, price: 96500000, title: "Terrace 5", description: "3-bed terrace" },
          { id: 6, price: 97500000, title: "Terrace 6", description: "3-bed terrace" },
        ],
      },
      {
        name: "Detached",
        stock: 1,
        listings: [{ id: 1, price: 160000000, title: "Detached 1", description: "4-bed detached" }],
      },
      {
        name: "Lands",
        stock: 4,
        listings: [
          { id: 1, pricePerSqm: 650000, sqm: 100, title: "Plot A", description: "100m²" },
          { id: 2, pricePerSqm: 670000, sqm: 120, title: "Plot B", description: "120m²" },
        ],
      },
    ],
  },
];

const BuyPropertySection = () => {
  const [step, setStep] = useState("locations"); // locations | locationDetails | propertyTypes | listings | listingDetail | payment
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  // payment-related
  const [paymentMethod, setPaymentMethod] = useState(null); // "Outright" | "Plan" | "Mortgage"
  const [quantity, setQuantity] = useState(1); // how many units (for listings with multiple units)
  const [planMonths, setPlanMonths] = useState(null);
  const [mortgageOption, setMortgageOption] = useState("");
  const [dob, setDob] = useState("");
  const [inspectionDate, setInspectionDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  // helper to compute listing price (lands use pricePerSqm * sqm)
  const computeListingPrice = (listing) => {
    if (!listing) return 0;
    if (listing.price) return listing.price;
    if (listing.pricePerSqm && listing.sqm) return listing.pricePerSqm * listing.sqm;
    return 0;
  };

  const listingPrice = computeListingPrice(selectedListing);
  const totalPrice = listingPrice * quantity;
  const monthlyPayment = planMonths ? totalPrice / planMonths : 0;

  // submit handler with toast & reset flow
  const handleFinalSubmit = () => {
    // basic validation
    if (!paymentMethod) {
      toast.error("Please select a payment option.");
      return;
    }
    if (!inspectionDate) {
      toast.error("Please pick an inspection date before submitting.");
      return;
    }
    if (paymentMethod === "Mortgage" && !mortgageOption) {
      toast.error("Please select a mortgage provider.");
      return;
    }
    // all good
    toast.success("Thank you. A member of our sales team will contact you shortly.", {
      duration: 4000,
      style: {
        background: "#71bf4f",
        color: "#fff",
        fontWeight: 600,
      },
    });

    // reset flow after toast (give it a little time)
    setTimeout(() => {
      setStep("locations");
      setSelectedLocation(null);
      setSelectedType(null);
      setSelectedListing(null);
      setPaymentMethod(null);
      setQuantity(1);
      setPlanMonths(null);
      setMortgageOption("");
      setDob("");
      setInspectionDate("");
      setSubmitted(true);
      // clear submitted flag after a short period (optional)
      setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  // ---------- Render steps ----------
  // 1) Locations
  if (step === "locations") {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Available Locations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
              >
                <img src={loc.image} alt={loc.name} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{loc.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{loc.description.slice(0, 100)}...</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedLocation(loc);
                        setStep("locationDetails");
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      View Location
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLocation(loc);
                        setSelectedType(null);
                        setSelectedListing(null);
                        setStep("propertyTypes");
                      }}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm"
                    >
                      View Property Types
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2) Location details
  if (step === "locationDetails" && selectedLocation) {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <button
            onClick={() => {
              setSelectedLocation(null);
              setStep("locations");
            }}
            className="text-green-600 font-semibold mb-6 hover:underline"
          >
            ← Back to All Locations
          </button>

          <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-72 object-cover rounded-2xl shadow-md mb-6" />

          <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedLocation.name}</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">{selectedLocation.description}</p>

          <div className="text-center">
            <button
              onClick={() => setStep("propertyTypes")}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              View Available Property Types
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 3) Property Types
  if (step === "propertyTypes" && selectedLocation) {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <button onClick={() => setStep("locationDetails")} className="text-green-600 font-semibold mb-6 hover:underline">
            ← Back to {selectedLocation.name}
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Property Types in {selectedLocation.name}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {selectedLocation.propertyTypes.map((type) => (
              <div
                key={type.name}
                className={`border rounded-xl p-5 shadow-sm text-center transition ${type.stock === 0 ? "opacity-50 cursor-not-allowed" : "hover:shadow-md cursor-pointer"}`}
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{type.name}</h4>
                <p className="text-green-600 font-medium mb-3">{type.stock > 0 ? `${type.stock} available` : "Sold Out"}</p>

                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => {
                      if (type.stock > 0) {
                        setSelectedType(type);
                        setSelectedListing(null);
                        setStep("listings");
                      } else {
                        toast.error("Currently sold out.");
                      }
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                  >
                    View Listings
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 4) Listings for a property type
  if (step === "listings" && selectedType && selectedLocation) {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <button onClick={() => setStep("propertyTypes")} className="text-green-600 font-semibold mb-6 hover:underline">
            ← Back to Property Types
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {selectedType.name} in {selectedLocation.name}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {selectedType.listings.map((listing) => (
              <div key={listing.id} className="border rounded-xl shadow-sm p-5 hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{listing.title || `${selectedType.name} ${listing.id}`}</h4>
                <p className="text-gray-600 mb-2">{listing.description || `Located at ${selectedLocation.name}`}</p>

                {/* Price display (land vs unit) */}
                {listing.price && <p className="text-green-700 font-semibold mb-3">Price: {formatPrice(listing.price)}</p>}
                {listing.pricePerSqm && listing.sqm && (
                  <>
                    <p className="text-gray-600 text-sm mb-1">Area: {listing.sqm} m²</p>
                    <p className="text-green-700 font-semibold mb-3">Total: {formatPrice(listing.pricePerSqm * listing.sqm)} ({formatPrice(listing.pricePerSqm)}/m²)</p>
                  </>
                )}

                <div className="flex justify-between items-center mt-3">
                  <button
                    onClick={() => {
                      setSelectedListing(listing);
                      setStep("listingDetail");
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      // quick intent: go to listingDetail and auto-open payment
                      setSelectedListing(listing);
                      setStep("listingDetail");
                    }}
                    className="px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 5) Listing Detail (NEW step) — shows listing details, choose quantity, then continue to payment
  if (step === "listingDetail" && selectedListing && selectedType && selectedLocation) {
    // determine maximum permitted quantity:
    // if this listing is a unique unit -> max = 1 (we assume each listing is unique),
    // but we allow multiple quantity in case listing represents a unit-type with multiple available (tweakable)
    const maxAllowed = selectedType.stock ?? selectedType.listings.length ?? 1;

    return (
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <button onClick={() => setStep("listings")} className="text-green-600 font-semibold mb-6 hover:underline">
            ← Back to Listings
          </button>

          <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* placeholder image (use location image) */}
            <img src={selectedLocation.image} alt={selectedListing.title} className="w-full h-64 object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedListing.title || `${selectedType.name} ${selectedListing.id}`}</h2>
              <p className="text-gray-700 mb-4">{selectedListing.description || selectedType.description || ""}</p>

              {/* Price details */}
              {selectedListing.price && (
                <p className="text-lg text-green-700 font-semibold mb-3">Price: {formatPrice(selectedListing.price)}</p>
              )}

              {selectedListing.pricePerSqm && selectedListing.sqm && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Area: <strong>{selectedListing.sqm} m²</strong></p>
                  <p className="text-sm text-gray-600">Price per m²: <strong>{formatPrice(selectedListing.pricePerSqm)}</strong></p>
                  <p className="text-lg text-green-700 font-semibold mt-2">Total: {formatPrice(selectedListing.pricePerSqm * selectedListing.sqm)}</p>
                </div>
              )}

              {/* Quantity selector (only if there are multiple available of this type) */}
              <div className="mt-4 flex items-center gap-3">
                <label className="text-gray-700 font-medium">Quantity</label>
                <input
                  type="number"
                  min={1}
                  max={maxAllowed}
                  value={quantity}
                  onChange={(e) => {
                    const val = Math.max(1, Math.min(maxAllowed, Number(e.target.value || 1)));
                    setQuantity(val);
                  }}
                  className="w-24 border rounded-md p-2 text-center"
                />
                <span className="text-sm text-gray-500"> (max {maxAllowed})</span>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep("payment")}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  Continue to Payment Options
                </button>

                <button onClick={() => setStep("listings")} className="px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 6) Payment options: Outright | Plan | Mortgage (and Book Inspection prior to final submit)
  if (step === "payment" && selectedListing && selectedType && selectedLocation) {
    return (
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <button onClick={() => setStep("listingDetail")} className="text-green-600 font-semibold mb-6 hover:underline">
            ← Back to Listing
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {["Outright", "Plan", "Mortgage"].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setPaymentMethod(m);
                  // reset mortgage specifics when switching
                  if (m !== "Mortgage") {
                    setMortgageOption("");
                    setDob("");
                  }
                }}
                className={`px-5 py-2 rounded-lg font-semibold border transition ${paymentMethod === m ? "bg-green-600 text-white border-green-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"}`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* show selected item summary */}
          <div className="border rounded-lg p-4 mb-6">
            <p className="text-gray-700">Selected: <strong>{selectedListing.title || `${selectedType.name} ${selectedListing.id}`}</strong></p>
            <p className="text-gray-700">Quantity: <strong>{quantity}</strong></p>
            <p className="text-green-700 font-semibold">Total Price: {formatPrice(totalPrice)}</p>
          </div>

          {/* Outright */}
          {paymentMethod === "Outright" && (
            <div className="mb-6">
              <p className="text-gray-700 mb-3">Pay the full amount of <strong>{formatPrice(totalPrice)}</strong>.</p>
            </div>
          )}

          {/* Plan */}
          {paymentMethod === "Plan" && (
            <div className="mb-6">
              <p className="text-gray-700 mb-3">Split the total across a schedule.</p>
              <div className="flex gap-3 mb-4">
                {[6, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => setPlanMonths(m)}
                    className={`px-4 py-2 rounded-lg border transition ${planMonths === m ? "bg-green-600 text-white border-green-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"}`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
              {planMonths && (
                <p className="text-gray-700">Monthly payment: <strong className="text-green-700">{formatPrice(monthlyPayment)}</strong>. Next payment due: 30 days from now.</p>
              )}
            </div>
          )}

          {/* Mortgage */}
          {paymentMethod === "Mortgage" && (
            <div className="mb-6">
              <p className="text-gray-700 mb-3">Select mortgage provider:</p>
              <div className="flex gap-3 mb-3">
                {["MREIF", "NHF", "Bank 1", "Bank 2"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setMortgageOption(opt)}
                    className={`px-4 py-2 rounded-lg border transition ${mortgageOption === opt ? "bg-green-600 text-white border-green-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {mortgageOption && (
                <div className="mt-2">
                  <label className="text-gray-700 font-medium">Date of birth:
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="ml-3 border rounded-md p-2" />
                  </label>
                  {dob && <p className="text-gray-700 mt-3">Selected: <strong>{mortgageOption}</strong></p>}
                </div>
              )}
            </div>
          )}

          {/* Book Inspection (must pick before final Submit) */}
          <div className="mt-6 border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Book an Inspection (required)</h3>
            <div className="flex items-center gap-3">
              <input type="date" value={inspectionDate} onChange={(e) => setInspectionDate(e.target.value)} className="border rounded-md p-2" />
              <button onClick={() => toast.success("Inspection date saved")} className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Save</button>
            </div>
          </div>

          {/* Final submit */}
          <div className="mt-8 flex gap-3">
            <button onClick={handleFinalSubmit} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Submit
            </button>
            <button onClick={() => setStep("listingDetail")} className="px-6 py-3 bg-white border border-gray-200 rounded-lg">Back</button>
          </div>
        </div>
      </section>
    );
  }

  // fallback
  return null;
};

export default BuyPropertySection;
