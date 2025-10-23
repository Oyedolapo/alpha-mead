// pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Alpha Mead Real Estate Partners (AMREP)</h1>
        
        {/* Opening Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            AMREP was formed to fix the fault lines in large-scale development: fragmented capital, unclear risk allocation and unreliable delivery. Since incorporation in 2017 as the development and investment arm of Alpha Mead Group, AMREP has combined world-class transaction design with robust delivery and sustainability practice — bridging capital, policy and implementation to create assets that endure.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Mission</h2>
            <p className="text-gray-700">
              To unlock sustainable urban and infrastructure value by creating bankable development models and implementing them to international standards.
            </p>
          </div>
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p>
              To be Africa's most trusted platform for real estate and infrastructure investment.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Integrity', 'Partnership', 'Excellence', 'Innovation', 'Sustainability'].map((value, index) => (
              <div key={index} className="bg-white border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold">
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Credentials & Proof Points</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
              <span><strong>Company registration:</strong> RC-1445251 — Incorporated October 13, 2017</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
              <span>ISO-certified management systems (quality & governance)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
              <span>Early adopters and pioneers of <strong>IFC EDGE compliance</strong> in Africa</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
              <span>Operational presence across <strong>10+ African countries</strong></span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
              <span>Strategic partnerships with leading EPC, technical and certification firms</span>
            </li>
          </ul>
        </div>

        {/* Operating Model */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Operating Model</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {['Origination', 'Structuring', 'Financing', 'Delivery', 'Concession/Transfer'].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="ml-2 font-medium">{step}</span>
                  {index < 4 && <span className="mx-2 text-gray-400">→</span>}
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center">
              Where transaction models require, AMREP accepts construction and performance responsibilities through EPC, JV or concession arrangements to align interests and secure outcomes.
            </p>
          </div>
        </div>

        {/* Leadership Teaser */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Leadership</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our leadership blends international investment and delivery experience with deep local market knowledge.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Meet the Team
          </button>
        </div>

        {/* CTA */}
        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Learn More About AMREP</h2>
          <p className="mb-6">Download our corporate brochure or request an executive briefing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Download Brochure
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Request Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;