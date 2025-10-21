// src/components/steps/StepLocations.jsx
import React from "react";

const StepLocations = ({ locations, onSelect }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Available Locations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.id}
            onClick={() => onSelect(loc)}
            className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer bg-white"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {loc.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {loc.description.slice(0, 100)}...
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                View Location
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepLocations;
