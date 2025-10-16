import React, { useState } from "react";
import GeneralEnquiryForm from "./forms/GeneralForm";
import VendorForm from "./forms/VendorForm";
import EmploymentForm from "./forms/EmploymentForm";

const ContactForm = () => {
    const [activeForm, setActiveForm] = useState("general");

    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-base text-gray-600">
                    Please select the category that best fits your enquiry.
                </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <button
                    onClick={() => setActiveForm("general")}
                    className={`px-4 py-2 text-sm rounded-lg font-medium border transition-all ${
                        activeForm === "general"
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                    }`}
                >
                    General Enquiries
                </button>

                <button
                    onClick={() => setActiveForm("vendor")}
                    className={`px-4 py-2 text-sm rounded-lg font-medium border transition-all ${
                        activeForm === "vendor"
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                    }`}
                >
                    Vendor Registration
                </button>

                <button
                    onClick={() => setActiveForm("employment")}
                    className={`px-4 py-2 text-sm rounded-lg font-medium border transition-all ${
                        activeForm === "employment"
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                    }`}
                >
                    Employment Opportunities
                </button>
            </div>

            {/* Form Display */}
            <div
                className={`transition-all duration-500 ${
                activeForm === "general" || activeForm === "vendor" || activeForm === "employment"
                    ? "max-w-none w-full" // Full width
                    : "max-w-4xl mx-auto" // Centered moderate width
                }`}
            >
                {activeForm === "general" && <GeneralEnquiryForm />}
                {activeForm === "vendor" && <VendorForm />}
                {activeForm === "employment" && <EmploymentForm />}
            </div>
        </section>
    );
};

export default ContactForm;
