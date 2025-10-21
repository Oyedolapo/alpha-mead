// src/components/steps/StepLocationDetails.jsx
import React from "react";

const StepLocationDetails = ({ location, onBack, onViewPropertyTypes }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10">
      <button
        onClick={onBack}
        className="text-green-600 font-semibold mb-6 hover:underline"
      >
        ← Back to All Locations
      </button>

      <img
        src={location.image}
        alt={location.name}
        className="w-full h-72 object-cover rounded-2xl shadow-md mb-6"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        {location.name}
      </h2>
      <p className="text-gray-700 mb-8 max-w-3xl">{location.description}</p>

      <div className="text-center">
        <button
          onClick={onViewPropertyTypes}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          View Available Property Types
        </button>
      </div>
    </div>
  );
};

export default StepLocationDetails;
