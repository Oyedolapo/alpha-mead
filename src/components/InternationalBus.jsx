import React from "react";
// import { useNavigate } from "react-router-dom";

const InternationalBus = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Global Reach, Local Excellence with Alphamead’s International Facility Management (IFM)
      </h2>

      <div className="space-y-4 text-gray-700 text-sm">
        <p className="leading-6">
          Alpha Mead’s International Facility Management (IFM) service is your strategic solution for comprehensive, global support. Designed for multinational corporations, diplomatic missions, and expanding businesses, our IFM services ensure operational efficiency, cost optimization, and consistent service quality across diverse real estate portfolios. As a leader in integrated facilities management in Africa, we provide seamless, standardized solutions across multiple locations and countries.
        </p>

        <p className="leading-6">
          Our approach consolidates all facility management functions under one strategic umbrella, enabling effortless coordination and central governance. Our team handles everything from a detailed facilities condition audit to comprehensive building maintenance and operations, ensuring your assets are always performing at their peak. We also specialize in warehouse and logistics services, offering robust security systems and technologies for properties to protect your investments. Regardless of your location, we are your single point of contact for all your global facility management needs.
        </p>

        {/* <button
          onClick={() => navigate("/international-business/case-studies")}
          className="bg-[#71bf4f] hover:bg-green-600 text-white px-8 py-3 rounded-2xl inline-block transition-colors mt-4"
        >
          View International Business Case Studies
        </button> */}
      </div>
    </div>
  );
};

export default InternationalBus;
