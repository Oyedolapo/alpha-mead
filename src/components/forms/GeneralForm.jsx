import React, { useState } from "react";
import { contactSocialLinks } from "../../constants/data";

const GeneralEnquiryForm = () => {
    const [subject, setSubject] = useState("");
    const [subOption, setSubOption] = useState("");

    // Sub-options for the Proptech category
    const proptechOptions = [
        "Facility Inspection System - EyeOnSite",
        "On Demand Management System - Call2Fix",
        "Computerized Maintenance Management System (CMMS)",
        "Identity Management System - Alpha IDMS",
    ];

    return (
        <section className="bg-[#EEF2F3] py-20 px-6 md:px-10 font-roboto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start">
                {/* Left Side — Contact Info */}
                <div className="md:pl-16">
                    <h4 className="text-green-600 tracking-widest font-semibold uppercase mb-2">
                        Contact Us
                    </h4>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        How to Reach Us
                    </h2>
                    <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                        Please fill out the contact form or email us at{" "}
                        <a
                        href="mailto:enquiry@alphamead.com"
                        className="text-green-600 underline"
                        >
                        enquiry@alphamead.com
                        </a>
                        .
                    </p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        An Alpha Mead representative will be in touch with you about your
                        request shortly.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-6 flex-wrap">
                        {contactSocialLinks.map(
                            ({ icon: Icon, url}, i) => (
                                <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 border border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
                                >
                                {Icon && <Icon size={20} />}
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Right Side — Form */}
                <form className="space-y-6 bg-[#EEF2F3] md:pr-16 w-full">
                    {/* Name / Email / Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-4 bg-white border border-gray-200 rounded-md w-full focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-4 bg-white border border-gray-200 rounded-md w-full focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="p-4 bg-white border border-gray-200 rounded-md w-full focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    {/* Main Subject Dropdown */}
                    <select
                        value={subject}
                        onChange={(e) => {
                        setSubject(e.target.value);
                        setSubOption(""); // reset sub-option when subject changes
                        }}
                        className="p-4 bg-white border border-gray-200 rounded-md w-full text-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
                    >
                        <option value="">Select Subject</option>
                        <option value="facility">Facility Management</option>
                        <option value="training">Training Services</option>
                        <option value="real-estate">Real Estate Development</option>
                        <option value="power-solutions">Power Solutions</option>
                        <option value="proptech">Property Technology Solutions (PROPTECH)</option>
                        <option value="healthcare">Healthcare Management</option>
                    </select>

                    {/* Conditional Sub-dropdown */}
                    {subject === "proptech" && (
                        <select
                            value={subOption}
                            onChange={(e) => setSubOption(e.target.value)}
                            className="p-4 bg-white border border-gray-200 rounded-md w-full text-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
                        >
                            <option value="">Select Proptech Service</option>
                            {proptechOptions.map((opt, index) => (
                                <option key={index} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                                {opt}
                                </option>
                            ))}
                        </select>
                    )}

                    {/* Message */}
                    <textarea
                        rows="5"
                        placeholder="Message"
                        className="p-4 bg-white border border-gray-200 rounded-md w-full focus:ring-2 focus:ring-green-500 outline-none"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default GeneralEnquiryForm;
