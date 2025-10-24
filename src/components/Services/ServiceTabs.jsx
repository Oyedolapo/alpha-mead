import React, { useState } from "react";
import { Info, Users, Briefcase, FileDown, Mail } from "lucide-react";
import {
  fmData,
  trainingData,
  realEstateData,
  powerData,
  propTechData,
  healthcareData,
  amrepData,
} from "../../constants/data.js"; // 🔹 you’ll create this new file for service info
import CountryContent from "../InternationalBusinessTabs/CountryContent";

const ServiceTabs = () => {
  const [activeService, setActiveService] = useState("Facility Management (AMF)");
  const [activeSubTab, setActiveSubTab] = useState("about");

  const subTabs = [
    { id: "about", label: "About Us", icon: Info },
    { id: "leadership", label: "Our Leadership Team", icon: Users },
    { id: "services", label: "What We Do", icon: Briefcase },
    { id: "brochure", label: "Download Brochure", icon: FileDown },
    { id: "contact", label: "Contact Details", icon: Mail },
  ];

  const services = [
    { title: "Facility Management (AMF)", data: fmData },
    { title: "Training Services (AMTC)", data: trainingData },
    { title: "Real Estate Development (AMDC)", data: realEstateData },
    { title: "Power Solutions", data: powerData },
    { title: "Property Technology (PropTech)", data: propTechData },
    { title: "Healthcare Management (AMHS)", data: healthcareData },
    { title: "Alpha Mead Real Estate Partners (AMREP)", data: amrepData },
  ];

  const activeServiceData = services.find(
    (service) => service.title === activeService
  )?.data;

  return (
    <section className="py-16 bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-8">
        
        {/* 🧭 Sidebar Navigation */}
        <aside className="lg:w-1/4 space-y-3">
          {services.map((service) => (
            <div key={service.title}>
              {/* Service Main Button */}
              <button
                onClick={() => {
                  setActiveService(service.title);
                  setActiveSubTab("about");
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition ${
                  activeService === service.title
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.title}
              </button>

              {/* Sub-navigation (dropdown style under active service) */}
              {activeService === service.title && (
                <div className="ml-4 mt-2 space-y-1 border-l border-gray-200 pl-3">
                  {subTabs.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveSubTab(id)}
                      className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded-md text-xs transition ${
                        activeSubTab === id
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* 📘 Content Display Area */}
        <div className="lg:w-3/4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {activeServiceData ? (
            <CountryContent
              activeCountry={activeService}
              activeSubTab={activeSubTab}
              data={activeServiceData}
            />
          ) : (
            <p className="text-gray-500">Select a service to view details.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
