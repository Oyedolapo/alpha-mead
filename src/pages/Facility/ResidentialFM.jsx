import React from "react";
import { ServiceLayout } from "../../components";
import residential from "../../assets/residential.jpg";  

const ResidentialFM = () => {
    const paragraphs = [
        "Managing a residential property can be a demanding task, but you don’t have to tackle it alone. Alpha Mead’s residential property management services are specifically designed for estates, apartment complexes, and gated communities.",
        "We handle all the day-to-day operations and maintenance, ensuring a comfortable, secure, and well-kept living environment for all residents. From essential building maintenance and operations to managing security and shared amenities, our team provides comprehensive solutions. Focus on your peace of mind while we ensure your property runs smoothly and efficiently, enhancing the value and quality of life for everyone.",
        "Our key offerings include:",
        "<span class='font-bold'>24/7 Power and Water Supply Management</span>: We ensure uninterrupted essential services, managing power generation and water distribution to keep your community running smoothly, day and night.",
        "<span class='font-bold'>Waste Disposal and Sanitation Services</span>: Our efficient waste management and sanitation solutions maintain a clean and hygienic environment for all residents.",
        "<span class='font-bold'>General Building Maintenance and Repairs</span>: From routine upkeep to emergency fixes, we handle all general building maintenance and repairs, preserving the value and aesthetics of your property.",
        "<span class='font-bold'>Security and Access Control Systems</span>: We implement and manage robust security measures and advanced access control systems to keep your community safe and secure.",
        "<span class='font-bold'>Landscaping and Communal Area Upkeep</span>: We maintain beautiful and inviting outdoor spaces, ensuring all communal areas are meticulously cared for and enjoyed by residents.",
        "Let us take the stress out of residential property management, so you and your residents can simply enjoy living there."
    ];

    return (
        <ServiceLayout
            heroText="Residential Facility Management"
            heroImage={residential}
            title="Stress-Free Residential Property Management"
            paragraphs={paragraphs}
            caseStudy={true}
            caseLink="/residential/case-studies"
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Facility Management", link: "/services/facilities-management" },
                { label: "Residential Facility Management" },
            ]}
         />
    )
};

export default ResidentialFM;
