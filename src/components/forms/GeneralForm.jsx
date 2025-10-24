import React, { useState, useRef } from "react";
import { contactSocialLinks } from "../../constants/data";
import { MapPin, Navigation } from "lucide-react";

const GeneralEnquiryForm = () => {
  const [subject, setSubject] = useState("");
  const [subOption, setSubOption] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const proptechOptions = [
    "Facility Inspection System - EyeOnSite",
    "On Demand Management System - Call2Fix",
    "Computerized Maintenance Management System (CMMS)",
    "Identity Management System - Alpha IDMS",
  ];

  const handleFileClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <section className="bg-[#EEF2F3] py-20 px-6 md:px-10 font-roboto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start">
        {/* Left Side — Contact Info */}
        <div className="md:pl-16 space-y-5">
          <h4 className="text-green-600 tracking-widest font-semibold uppercase mb-2"> General Enquiries </h4>
          <h2 className="text-3xl font-bold text-gray-900">
            How to Reach Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Please fill out the contact form or email us at{" "}
            <a
              href="mailto:enquiry@alphamead.com"
              className="text-green-600 underline"
            >
              enquiry@alphamead.com
            </a>
            . An Alpha Mead representative will be in touch with you shortly.
          </p>

          {/* 📍 Address Card (replaces map) */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 -mx-3">
            <div className="flex items-start gap-2">
              <MapPin className="text-green-600 mt-1" size={22} />
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  Alpha Mead Group
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  6 Mobolaji Johnson Avenue, <br />
                  Ikoyi, Lagos 101222, Nigeria
                </p>
                <a
                  href="https://www.google.com/maps?q=6+Mobolaji+Johnson+Ave,+Ikoyi,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 font-medium text-sm mt-2 hover:underline"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 flex-wrap">
            {contactSocialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition"
              >
                {Icon && <Icon size={15} />}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side — Form */}
        <form className="space-y-6 bg-[#EEF2F3] md:pr-16 w-full">
          {/* Name / Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
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

          {/* Subject Dropdown */}
          <select
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setSubOption("");
            }}
            className="p-4 text-sm bg-white border border-gray-200 rounded-md w-full text-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select Subject</option>
            <option value="facility">Facility Management</option>
            <option value="training">Training Services</option>
            <option value="real-estate">Real Estate Development</option>
            <option value="power-solutions">Power Solutions</option>
            <option value="eye-on-site">EyeOnSite</option>
            <option value="call2fix">Call2Fix</option>
            <option value="alpha-cmmms">Alpha CMMS</option>
            <option value="security-management">Security Management System</option>
            <option value="healthcare">Healthcare Management</option>
            <option value="healthcare">AlphaMead Real Estate Partners (AMREP)</option>
          </select>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Message"
            className="p-4 text-sm bg-white border border-gray-200 rounded-md w-full focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>

          {/* Attach File + Submit Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleFileClick}
              className={`flex-1 bg-gray-100 border border-gray-300 text-gray-700 py-3 px-5 rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-sm text-sm w-full ${
                file ? "border-green-500 text-green-700" : ""
              }`}
            >
              {file ? `📎 ${file.name}` : "Attach File (Optional)"}
            </button>

            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GeneralEnquiryForm;
