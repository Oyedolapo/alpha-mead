import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Awards, CorporateManagement, CorporatePolicies, CustomerTestimonials, OurLeadership, StrategicPartnership, WhoWeAre } from "../components";

const AboutTabs = ({ initialTab = 0 }) => {
    const location = useLocation();
    const tabIndexFromNav =
    location.state && location.state.tabIndex !== undefined
      ? location.state.tabIndex
      : initialTab;
    const [activeTab, setActiveTab] = useState(tabIndexFromNav || 0);

    const tabs = [
        { title: "Who We Are", component: <WhoWeAre /> },
        { title: "Our Leadership", component: <OurLeadership /> },
        { title: "Corporate Structures", component: <CorporateManagement /> },
        { title: "Corporate Policies", component: <CorporatePolicies /> },
        { title: "Strategic Partnerships", component: <StrategicPartnership />},
        { title: "Customer Testimonials", component: <CustomerTestimonials /> },
        { title: "Awards & Recognitions", component: <Awards /> },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* ✅ Tab Navigation */}
                    <div className="lg:w-1/4">
                        {/* Horizontal scroll on mobile */}
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

                    {/* ✅ Tab Content */}
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

export default AboutTabs;
