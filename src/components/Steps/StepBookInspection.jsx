// src/components/steps/StepBookInspection.jsx
import React, { useState } from "react";

const StepBookInspection = ({ onBack, onSubmit }) => {
  const [inspectionDate, setInspectionDate] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-6 text-center">
      <button
        onClick={onBack}
        className="text-green-600 font-semibold mb-6 hover:underline"
      >
        ← Back to Payment Options
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Book an Inspection
      </h2>

      <p className="text-gray-600 mb-6">
        Choose a convenient date to visit the property before finalizing your
        purchase.
      </p>

      <input
        type="date"
        value={inspectionDate}
        onChange={(e) => setInspectionDate(e.target.value)}
        className="border rounded-lg p-3 text-gray-700 w-60 text-center"
      />

      <div className="mt-8">
        <button
          onClick={() => {
            if (!inspectionDate) return alert("Please select a date.");
            onSubmit(inspectionDate);
          }}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepBookInspection;
