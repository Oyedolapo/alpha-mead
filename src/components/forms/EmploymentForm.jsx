import React, { useState, useRef } from "react";

const EmploymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employment form submitted:", formData);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="bg-[#EEF2F3] py-20 px-6 md:px-10 font-roboto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-start">
        {/* Left Side — Information */}
        <div className="md:pl-16">
          <h4 className="text-green-600 tracking-widest font-semibold uppercase mb-2">
            Careers
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join the Alpha Mead Team
          </h2>
          <p className="text-gray-700 text-base mb-3 leading-relaxed">
            At Alpha Mead, we believe our people are our greatest asset. We’re
            always looking for passionate and driven professionals to join our
            growing team.
          </p>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            Please complete the form to submit your application. If your profile
            matches an open role, our HR team will get in touch.
          </p>
        </div>

        {/* Right Side — Application Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6 md:pr-16 w-full"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Employment Opportunities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="text"
            name="position"
            placeholder="Position Applied For"
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full text-sm focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* File Upload + Submit Buttons Side by Side */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <input
              type="file"
              name="resume"
              accept=".pdf"
              ref={fileInputRef}
              onChange={handleChange}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleFileButtonClick}
              className="flex-1 bg-gray-100 border border-gray-300 text-gray-700 py-3 px-5 rounded-xl font-semibold hover:bg-gray-200 transition-all shadow-sm text-sm w-full"
            >
              {formData.resume ? `📄 ${formData.resume.name}` : "Upload Resume (PDF)"}
            </button>

            <button
              type="submit"
              className="flex-1 bg-green-600 text-base text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md w-full"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmploymentForm;
