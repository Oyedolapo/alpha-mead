import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Awards,
  CorporateManagement,
  CorporatePolicies,
  Country,
  CustomerTestimonials,
  InternationalBus,
  OurLeadership,
  WhoWeAre,
} from "../components";
import { beninData, botswanaData, cameroonData, coteData, ethiopiaData, ghanaData, guineaData, kenyaData, rwandaData, senegalData, southAfricaData, tanzaniaData, uaeData } from "../constants/data";

const InterBusinessTabs = ({ initialTab = 0 }) => {
  const location = useLocation();
  const tabIndexFromNav =
    location.state && location.state.tabIndex !== undefined
      ? location.state.tabIndex
      : initialTab;
  const [activeTab, setActiveTab] = useState(tabIndexFromNav || 0);

  // 🌍 Define the main tab + grouped regions
  const mainTab = { title: "International Business", component: <InternationalBus /> };

  const regions = [
    {
      title: "West Africa",
      tabs: [
        { title: "Ghana", component: <Country data={ghanaData[0]} /> },
        { title: "Cameroon", component: <Country data={cameroonData[0]} /> },
        { title: "Senegal", component: <Country data={senegalData[0]} /> },
        { title: "Côte d'Ivoire", component: <Country data={coteData[0]} /> },
        { title: "Benin Republic", component: <Country data={beninData[0]} /> },
        { title: "Guinea Conakry", component: <Country data={guineaData[0]} /> },
      ],
    },
    {
      title: "East Africa",
      tabs: [
        { title: "Kenya", component: <Country data={kenyaData[0]} /> },
        { title: "Rwanda", component: <Country data={rwandaData[0]} /> },
        { title: "Ethiopia", component: <Country data={ethiopiaData[0]} /> },
        { title: "Tanzania", component: <Country data={tanzaniaData[0]} /> },
      ],
    },
    {
      title: "Southern Africa",
      tabs: [
        { title: "South Africa", component: <Country data={southAfricaData[0]} /> },
        { title: "Botswana", component: <Country data={botswanaData[0]} /> },
      ],
    },
    {
      title: "Others",
      tabs: [
        { title: "UAE", component: <Country data={uaeData[0]} /> },
      ],
    },
  ];

  // Flatten everything (mainTab + all regions)
  const allTabs = [mainTab, ...regions.flatMap((region) => region.tabs)];
  const ActiveComponent = allTabs[activeTab]?.component;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="space-y-4">
              {/* 🔹 Top-level single tab */}
              <button
                onClick={() => setActiveTab(0)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition ${
                  activeTab === 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {mainTab.title}
              </button>

              {/* 🔹 Collapsible Regional Sections */}
              {regions.map((region, regionIndex) => (
                <Disclosure key={regionIndex}>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-lg">
                      <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm font-semibold text-gray-700">
                        <span>{region.title}</span>
                        {open ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Disclosure.Button>

                      <Disclosure.Panel className="px-3 pb-3 mt-2 space-y-2">
                        {region.tabs.map((tab, index) => {
                          // Global index = 1 (for main tab) + region offset
                          const globalIndex =
                            1 +
                            regions
                              .slice(0, regionIndex)
                              .flatMap((r) => r.tabs).length +
                            index;

                          return (
                            <button
                              key={index}
                              onClick={() => setActiveTab(globalIndex)}
                              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                                activeTab === globalIndex
                                  ? "bg-green-600 text-white"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {tab.title}
                            </button>
                          );
                        })}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>

          {/* ✅ Active Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              {ActiveComponent || (
                <p className="text-gray-500">Select a section to view details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterBusinessTabs;
