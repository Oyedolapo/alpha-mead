import React, { useState } from 'react';
import WhoWeAre from './WhoWeAre';
import OurLeadership from './OurLeadership';
import { useLocation } from 'react-router-dom';
import CorporateManagement from './CorporateManagement';
// import { compile } from 'tailwindcss';
import CustomerTestimonials from './CustomerTestimonials';
import CorporatePolicies from './CorporatePolicies';
import Awards from './Awards';
// import WhyYouShould from './WhyYouShould';
// import CSR from './CSR';

const AboutTabs = ({ initialTab = 0 }) => {
    const location = useLocation();
    const tabIndexFromNav = location.state && location.state.tabIndex !== undefined ? location.state.tabIndex : initialTab;
    const [activeTab, setActiveTab] = useState(tabIndexFromNav || 0);

    const tabs = [
        { title: "Who We Are", component: <WhoWeAre /> },
        { title: "Our Leadership", component: <OurLeadership /> },
        { title: "Corporate Structures", component: <CorporateManagement /> },
        { title: "Customer Testimonials", component: <CustomerTestimonials /> },
        // { title: "CSR", component: <CSR /> },
        { title: "Corporate Policies", component: <CorporatePolicies />},
        { title: "Awards & Recognitions", component: <Awards />},
        // { title: "Why You Should Engage Us", component: <WhyYouShould /> }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tab Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-8 space-y-2">
                            {tabs.map((tab, index) => (
                                <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-4 rounded-lg transition-colors ${
                                    activeTab === index
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                >
                                    <span className="font-medium">{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="lg:w-5/6">
                        <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                            {tabs[activeTab].component || tabs[activeTab].content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutTabs;