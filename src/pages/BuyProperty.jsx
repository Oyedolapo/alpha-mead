import React, { useState } from "react";
import lekki from '../assets/lekki (1).jpg';
import greenpark from '../assets/greenPark.jpg';
import { Footer, Header } from "../components";

const locations = [
  {
    id: 1,
    name: "Lekki Pearl Estate",
    image: lekki,
    description: `Lekki Pearl is one of Alphamead's flagship estates, located in the heart of Lekki. It offers premium residential spaces with modern infrastructure and top-notch security.`,
    propertyTypes: [
      { name: "Apartments", stock: 5, price: 75000000 },
      { name: "Terraces", stock: 3, price: 120000000 },
      { name: "Semi-Detached", stock: 0, price: 0 },
      { name: "Detached", stock: 2, price: 180000000 },
      { name: "Lands", stock: 4, price: 65000000 },
    ],
  },
  {
    id: 2,
    name: "Green Park Homes",
    image: greenpark,
    description: `Green Park Homes is a serene gated community designed for families who value comfort, security, and sustainability.`,
    propertyTypes: [
      { name: "Apartments", stock: 0, price: 0 },
      { name: "Terraces", stock: 6, price: 95000000 },
      { name: "Detached", stock: 1, price: 160000000 },
    ],
  },
];

const BuyPropertyPage = () => {
  const [step, setStep] = useState("intro");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [quantity, setQuantity] = useState(1);
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

  const totalPrice = selectedPropertyType
    ? selectedPropertyType.price * quantity
    : 0;

  const monthlyPayment =
    planMonths && selectedPropertyType
      ? (selectedPropertyType.price * quantity) / planMonths
      : 0;

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white">
        <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-[10rem] pb-[8rem]">
        {/* Step 1: Intro */}
        {step === "intro" && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Buy a Property
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our available estates and find your next home or
              investment property.
            </p>
            <button
              onClick={() => setStep("locations")}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              View Available Locations
            </button>
          </div>
        )}

        {/* Step 2: Locations */}
        {step === "locations" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Select a Location
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
                  onClick={() => {
                    setSelectedLocation(loc);
                    setStep("description");
                  }}
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {loc.description.slice(0, 80)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Description */}
        {step === "description" && selectedLocation && (
          <div>
            <button
              onClick={() => setStep("locations")}
              className="text-green-600 font-semibold mb-4 hover:underline"
            >
              ← Back to Locations
            </button>

            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedLocation.name}
                </h2>
                <p className="text-gray-700 mb-6">
                  {selectedLocation.description}
                </p>
                <button
                  onClick={() => setStep("propertyTypes")}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  Select Property Type
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Property Type */}
        {step === "propertyTypes" && selectedLocation && (
          <div>
            <button
              onClick={() => setStep("description")}
              className="text-green-600 font-semibold mb-4 hover:underline"
            >
              ← Back to Description
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Select Property Type
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedLocation.propertyTypes.map((type, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-xl p-5 shadow-sm text-center transition ${
                    type.stock === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-md cursor-pointer"
                  } ${
                    selectedPropertyType?.name === type.name
                      ? "ring-2 ring-green-600"
                      : ""
                  }`}
                  onClick={() =>
                    type.stock > 0 && setSelectedPropertyType(type)
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {type.stock === 0
                      ? "Sold Out"
                      : `${type.stock} available`}
                  </p>
                  {type.stock > 0 && (
                    <p className="text-green-600 font-semibold">
                      {formatPrice(type.price)}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {selectedPropertyType && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setStep("payment")}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  Continue to Payment Options
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 5: Payment Options */}
        {step === "payment" && selectedPropertyType && (
          <div>
            <button
              onClick={() => setStep("propertyTypes")}
              className="text-green-600 font-semibold mb-4 hover:underline"
            >
              ← Back to Property Type
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Select Payment Option
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Outright", "Plan", "Mortgage"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`px-6 py-3 rounded-lg font-semibold border transition ${
                    paymentMethod === method
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            {/* Outright */}
            {paymentMethod === "Outright" && (
              <div className="text-center">
                <p className="text-gray-700 mb-3">
                  Property: <strong>{selectedPropertyType.name}</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  Price per unit: {formatPrice(selectedPropertyType.price)}
                </p>
                <label className="text-gray-700 font-medium">
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    max={selectedPropertyType.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="ml-3 border rounded-md p-2 w-20 text-center"
                  />
                </label>
                <p className="text-green-700 mt-4 font-semibold">
                  Total: {formatPrice(totalPrice)}
                </p>
                <button
                  onClick={handleSubmit}
                  className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </div>
            )}

            {/* Plan */}
            {paymentMethod === "Plan" && (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Choose a Payment Plan
                </h3>
                <div className="flex justify-center gap-4 mb-4">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setPlanMonths(m)}
                      className={`px-5 py-2 rounded-lg border transition ${
                        planMonths === m
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
                {planMonths && (
                  <>
                    <p className="text-gray-700 mb-2">
                      Property: <strong>{selectedPropertyType.name}</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      Monthly Payment:{" "}
                      <span className="text-green-700 font-semibold">
                        {formatPrice(monthlyPayment)}
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      Next payment due: 30 days from now
                    </p>
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Mortgage */}
            {paymentMethod === "Mortgage" && (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Select a Mortgage Option
                </h3>
                <div className="flex justify-center flex-wrap gap-4 mb-4">
                  {["MREIF", "NHF", "Bank 1", "Bank 2"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setMortgageOption(opt)}
                      className={`px-5 py-2 rounded-lg border transition ${
                        mortgageOption === opt
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {mortgageOption && (
                  <div className="mt-4">
                    <label className="text-gray-700 font-medium">
                      Date of Birth:
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="ml-3 border rounded-md p-2"
                      />
                    </label>
                    {dob && (
                      <div className="mt-4">
                        <p className="text-gray-700">
                          Selected Mortgage: <strong>{mortgageOption}</strong>
                        </p>
                        <p className="text-green-700 font-semibold mt-2">
                          Property Price: {formatPrice(totalPrice || selectedPropertyType.price)}
                        </p>
                        <button
                          onClick={handleSubmit}
                          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Book Inspection */}
            <div className="text-center mt-12 border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Book an Inspection
              </h3>
              <input
                type="date"
                value={inspectionDate}
                onChange={(e) => setInspectionDate(e.target.value)}
                className="border rounded-md p-2"
              />
              <button
                onClick={() => alert("Inspection booked successfully!")}
                className="ml-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Book
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Submission Thank You */}
        {submitted && (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Thank you!
            </h2>
            <p className="text-gray-600">
              A member of our sales team will contact you shortly.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default BuyPropertyPage;
