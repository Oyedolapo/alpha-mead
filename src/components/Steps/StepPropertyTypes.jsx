// src/components/steps/StepPropertyTypes.jsx
import React from "react";

const StepPropertyTypes = ({ location, onBack, onSelectType }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <button
        onClick={onBack}
        className="text-green-600 font-semibold mb-6 hover:underline"
      >
        ← Back to {location.name}
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Property Types in {location.name}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {location.propertyTypes.map((type) => (
          <div
            key={type.name}
            onClick={() => {
              if (type.stock > 0) onSelectType(type);
            }}
            className={`border rounded-xl p-5 shadow-sm text-center transition ${
              type.stock === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-md cursor-pointer"
            }`}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {type.name}
            </h4>
            <p className="text-green-600 font-medium">
              {type.stock > 0 ? `${type.stock} available` : "Sold Out"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepPropertyTypes;
