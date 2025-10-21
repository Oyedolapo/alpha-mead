// src/components/steps/StepListings.jsx
import React from "react";

const StepListings = ({ location, type, onBack, onViewDetails }) => {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <button
        onClick={onBack}
        className="text-green-600 font-semibold mb-6 hover:underline"
      >
        ← Back to Property Types
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {type.name} in {location.name}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {type.listings.map((listing) => (
          <div
            key={listing.id}
            className="border rounded-xl shadow-sm p-5 hover:shadow-md transition bg-white"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {type.name} {listing.id}
            </h4>
            <p className="text-gray-600 mb-3">Located at {location.name}</p>
            <p className="text-green-700 font-semibold">
              Price: {formatPrice(listing.price)}
            </p>
            <button
              onClick={() => onViewDetails(listing)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepListings;
