// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    projectBrief: '',
    budget: '',
    timeline: '',
    agreeToNDA: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact AMREP</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              We welcome conversations with governments, investors, developers and technical partners. Use the channels below for partnerships, investor relations and procurement.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                <p className="text-gray-700">
                  No. 6, Mobolaji Johnson Avenue, Ikoyi, Lagos State, Nigeria
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone & Hotline</h3>
                <p className="text-gray-700">Hotline: <span className="font-semibold">0700 ALPHA MEAD</span></p>
                <p className="text-gray-700">Phone: <span className="font-semibold">+234-701-9999-343</span></p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">General Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@alphamead.com" className="text-green-600 hover:text-green-700">
                    info@alphamead.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="projectBrief" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Brief (short) *
                </label>
                <textarea
                  id="projectBrief"
                  name="projectBrief"
                  rows="3"
                  required
                  value={formData.projectBrief}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Budget (optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Timeline *
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-1">
                  File Upload
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToNDA"
                  name="agreeToNDA"
                  checked={formData.agreeToNDA}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="agreeToNDA" className="text-sm text-gray-700">
                  I agree to the Non-Disclosure Agreement
                </label>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Submit Inquiry
                </button>
                <button
                  type="button"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Request Tender Pack
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;