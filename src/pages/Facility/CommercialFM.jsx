import React from "react";
import { ServiceLayout } from "../../components";
import commercial from "../../assets/commercial.jpg";  

const CommercialFM = () => {
    const paragraphs = [
        "High-traffic environments like malls, retail stores, banks, and hospitality venues demand specialized care. Our commercial property management services are designed to ensure your space is always at its best. We provide comprehensive integrated facilities management solutions that create a welcoming, safe, and efficient experience for both tenants and customers.",
        "From essential building maintenance and operations to advanced security and cleaning protocols, we handle every detail. You can trust us to deliver the specialized care your commercial property needs to thrive, allowing you to focus on your core business while we maintain your infrastructure at its peak.",
        "Our key offerings include:",
        "<span class='font-bold'>Maintenance of HVAC, Lighting, and Plumbing Systems:</span> We ensure all critical infrastructure operates flawlessly, providing a comfortable and functional environment for your visitors and staff, and preventing costly downtime.",
        "<span class='font-bold'>Cleaning and Hygiene Services Tailored for High-Traffic Areas:</span> Our specialized cleaning protocols are designed to maintain impeccable cleanliness and hygiene standards, even in the busiest commercial settings, creating a positive impression on every visitor.",
        "<span class='font-bold'>Energy Efficiency and Cost Control Solutions:</span> We implement smart energy management strategies and explore cost-saving solutions without compromising comfort or functionality, contributing to your bottom line.",
        "<span class='font-bold'>Security and Crowd Management:</span> Our comprehensive security solutions, including advanced systems and expert personnel, ensure the safety of your premises and effective management of large crowds, providing peace of mind for everyone.",
        "<span class='font-bold'>Tenant and Customer Support Services:</span> We act as a reliable point of contact, offering prompt and efficient support to your tenants and addressing customer needs to enhance their overall experience within your facility.",
        "Let us optimize your commercial space, transforming it into a high-performing asset that supports your business goals and delight your customers."
    ];

    return (
        <ServiceLayout
            heroText="Commercial Facility Management"
            heroImage={commercial}
            title="Expert Facilities Management for High-Traffic Commercial Spaces"
            paragraphs={paragraphs}
            caseStudy={true}
            caseLink="/commercial/case-studies"
         />
    )
};

export default CommercialFM;
