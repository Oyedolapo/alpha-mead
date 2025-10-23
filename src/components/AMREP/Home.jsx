// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Alpha Mead Real Estate Partners (AMREP)</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We turn land, capital and governance into enduring places — structuring bankable deals and delivering high-impact developments across Africa.
          </p>
          <p className="text-lg mb-12 max-w-4xl mx-auto">
            AMREP is a Pan-African real estate development and investment firm. Since 2017 we have combined rigorous financial structuring, technical delivery and sustainability leadership to deliver projects that perform commercially and create social value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/projects" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Explore Projects
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-green-600 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Partnerships
            </Link>
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold transition duration-300">
              Download Corporate Profile
            </button>
          </div>
          
          {/* Trust Ribbon */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-sm md:text-base">
              RC-1445251 · Incorporated Oct 13, 2017 · ISO-certified · IFC EDGE compliance pioneer (Africa) · Operating in 10+ African markets
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-black font-semibold">African markets</div>
              <p className="text-gray-600 mt-2">Presence across African markets</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-black font-semibold">Hectares</div>
              <p className="text-gray-600 mt-2">Delivered and under active development across flagship sites</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-black font-semibold">Units</div>
              <p className="text-gray-600 mt-2">In active pipeline (verified figures only)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Deal structuring & transaction design",
              "Land banking & asset origination",
              "Joint venture development & execution",
              "PPP & concession advisory and implementation",
              "Infrastructure development, financing & concessioning",
              "Strategic advisory & data intelligence"
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <p className="text-black font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Green Park Estate, Lagos",
                description: "50-ha integrated development",
                link: "/projects/green-park"
              },
              {
                name: "Coal City View, Enugu",
                description: "750-unit satellite estate",
                link: "/projects/coal-city"
              },
              {
                name: "Lekki Pearl Estate, Lagos",
                description: "54-unit residential cluster",
                link: "/projects/lekki-pearl"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to={project.link} className="text-green-600 hover:text-green-700 font-semibold">
                    View project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Partner with a team that designs bankable structures and delivers results.
          </h2>
          <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            Request a Partnership Brief
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;