import React, { useState } from "react";
import BuyPropertySection from "./BuyPropertySection";
import RentPropertySection from "./RentPropertySection";
import RentToOwnSection from "./RentToOwnSection";

const BuyPropertyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Buy Property", component: <BuyPropertySection /> },
    { title: "Rent Property", component: <RentPropertySection /> },
    { title: "Rent-to-Own Property", component: <RentToOwnSection /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-4 py-3 rounded-lg whitespace-nowrap transition-colors text-sm font-semibold text-left ${
                    activeTab === index
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              {tabs[activeTab].component}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyPropertyTabs;
