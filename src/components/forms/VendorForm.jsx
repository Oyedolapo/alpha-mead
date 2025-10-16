import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const VendorForm = () => {
    return (
        <section className="bg-[#EEF2F3] py-20 px-6 md:px-10 font-roboto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start">
                {/* Left Section — Info */}
                <div className="md:pl-16">
                    <h4 className="text-green-600 tracking-widest font-semibold uppercase mb-2">
                        Vendor Registration
                    </h4>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Partner With Alpha Mead
                    </h2>
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                        We’re excited to collaborate with qualified vendors and service
                        providers. Our Vendor Portal allows you to register your company,
                        submit compliance documents, and stay updated on opportunities.
                    </p>
                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                        Please ensure your company details and certifications are up to
                        date before starting the registration.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition-all shadow-md"
                    >
                        Go to Vendor Portal <FaExternalLinkAlt />
                    </a>
                </div>

                {/* Right Section — Supporting Visual or Info */}
                <div className="md:pr-16 flex flex-col justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-green-700 mb-4">
                            Registration Requirements
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                            <li>Company registration documents (CAC or equivalent)</li>
                            <li>Tax Identification Number (TIN)</li>
                            <li>Relevant certifications or industry licenses</li>
                            <li>Past project references or experience summaries</li>
                            <li>Bank details for vendor verification</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorForm;
