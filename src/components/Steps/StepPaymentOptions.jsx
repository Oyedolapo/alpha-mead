// src/components/steps/StepPaymentOptions.jsx
import React, { useState } from "react";

const StepPaymentOptions = ({  type, listing, onBack, onNext }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [planMonths, setPlanMonths] = useState(null);
  const [mortgageOption, setMortgageOption] = useState("");
  const [dob, setDob] = useState("");

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  const totalPrice = listing.price * quantity;
  const monthlyPayment =
    planMonths && listing.price ? totalPrice / planMonths : 0;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <button
        onClick={onBack}
        className="text-green-600 font-semibold mb-6 hover:underline"
      >
        ← Back to Listings
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Payment Options for {type.name} {listing.id}
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Outright Purchase", "Payment Plan", "Mortgage"].map((method) => (
          <button
            key={method}
            onClick={() => {
              setPaymentMethod(method);
              setPlanMonths(null);
              setMortgageOption("");
            }}
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

      {/* 💰 Outright Purchase */}
      {paymentMethod === "Outright Purchase" && (
        <div className="text-center bg-gray-50 p-6 rounded-xl">
          <p className="text-gray-700 mb-3">
            <strong>Price per unit:</strong> {formatPrice(listing.price)}
          </p>
          <label className="text-gray-700 font-medium">
            Quantity:
            <input
              type="number"
              min="1"
              max={type.stock}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.min(e.target.value, type.stock))
              }
              className="ml-3 border rounded-md p-2 w-20 text-center"
            />
          </label>
          <p className="text-green-700 mt-4 font-semibold">
            Total: {formatPrice(totalPrice)}
          </p>
          <button
            onClick={() =>
              onNext({ method: "Outright Purchase", amount: totalPrice })
            }
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Continue
          </button>
        </div>
      )}

      {/* 📅 Payment Plan */}
      {paymentMethod === "Payment Plan" && (
        <div className="text-center bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Choose a Payment Schedule
          </h3>
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
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
                Monthly Payment:{" "}
                <span className="text-green-700 font-semibold">
                  {formatPrice(monthlyPayment)}
                </span>
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Next payment due: 30 days from now
              </p>
              <button
                onClick={() =>
                  onNext({
                    method: "Payment Plan",
                    planMonths,
                    monthlyPayment,
                  })
                }
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Continue
              </button>
            </>
          )}
        </div>
      )}

      {/* 🏦 Mortgage */}
      {paymentMethod === "Mortgage" && (
        <div className="text-center bg-gray-50 p-6 rounded-xl">
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
                <div className="mt-6">
                  <p className="text-gray-700 mb-2">
                    Selected: <strong>{mortgageOption}</strong>
                  </p>
                  <p className="text-green-700 font-semibold mb-4">
                    Property Price: {formatPrice(listing.price)}
                  </p>
                  <button
                    onClick={() =>
                      onNext({
                        method: "Mortgage",
                        provider: mortgageOption,
                        dob,
                      })
                    }
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StepPaymentOptions;
