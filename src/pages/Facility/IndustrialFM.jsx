import React from "react";
import { ServiceLayout } from "../../components";
import industrial from "../../assets/industrial.jpg";  

const IndustrialFM = () => {
    const paragraphs = [
        "Operating an industrial facility, be it a warehouse, factory, or manufacturing plant, demands specialized expertise to ensure efficiency, safety, and continuous operation. Our Industrial Facilities Management services are designed to meet the unique challenges of these environments, helping you maintain peak performance and adhere to stringent industry standards.",
        "With a focus on integrated facilities management, we offer solutions that power your operations. We provide comprehensive maintenance and repair services, as well as specialized warehouse and logistics services. Our team also implements robust security systems and technologies for properties to safeguard your assets.",
        "Our key offerings include:",
        "<span class='font-bold'>Maintenance of Heavy-Duty Equipment and Production Infrastructure:</span> We provide specialized maintenance for your critical machinery and production lines, minimizing downtime and maximizing output.",
        "<span class='font-bold'>Safety Systems and Regulatory Compliance Management:</span> We implement robust safety protocols and ensure your facility consistently meets all industry regulations and compliance requirements, safeguarding your operations and personnel.",
        "<span class='font-bold'>Industrial Cleaning and Hazardous Waste Handling:</span> Our expert teams manage comprehensive industrial cleaning and the safe, compliant handling of hazardous waste, maintaining a secure and healthy work environment.",
        "<span class='font-bold'>Facility Layout Planning and Optimization:</span> We help you strategically plan and optimize your facility’s layout to enhance workflow, improve efficiency, and support future growth.",
        "<span class='font-bold'>Energy and Utility Consumption Monitoring:</span> We continuously monitor and manage your energy and utility consumption, identifying opportunities for cost savings and promoting sustainable practices.",
        "Let us optimize your industrial operations, transforming your facility into a streamlined, safe, and highly productive asset."
    ];

    return (
        <ServiceLayout
            heroText="Industrial Facility Management"
            heroImage={industrial}
            title="Powering Peak Performance for Industrial Facilities"
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Facility Management", link: "/services/facilities-management" },
                { label: "Industrial Facility Management" },
            ]}
         />
    )
};

export default IndustrialFM;
