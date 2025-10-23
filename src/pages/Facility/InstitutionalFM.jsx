import React from "react";
import { ServiceLayout } from "../../components";
import institutional from "../../assets/institutional.jpg";  

const InstitutionalFM = () => {
    const paragraphs = [
        "We keep large institutions running smoothly, making operations seamless and efficient. Our Institutional Facility Management services are designed to handle every aspect of facility operations for schools, universities, hospitals, government buildings, and religious centers. We offer comprehensive integrated facilities management in Nigeria and across Africa, ensuring your environment is safe, efficient, and well-maintained.",
        "We deliver customized solutions that help you achieve your strategic objectives. This allows you to focus on your core mission while we ensure your infrastructure performs at its peak.",
        "Our key offerings include:",
        "<span class='font-bold'>Janitorial and Sanitation Services:</span> We provide comprehensive cleaning and hygiene solutions to maintain a pristine and healthy environment for students, staff, patients, and visitors.",
        "<span class='font-bold'>Preventive and Corrective Maintenance of Utilities:</span> From ensuring optimal lighting and efficient plumbing to maintaining HVAC systems, we proactively address potential issues and provide swift solutions for any breakdowns.",
        "<span class='font-bold'>Security and Access Control:</span> Our robust security measures and advanced access control systems protect your premises and the people within them.",
        "<span class='font-bold'>Space Planning and Asset Management:</span> We help you optimize your institutional space and manage your assets effectively, maximizing efficiency and minimizing waste.",
        "<span class='font-bold'>Health, Safety, and Environmental Compliance:</span> We ensure your facility adheres to all relevant health, safety, and environmental regulations, providing a secure and sustainable operation.",
        "Let us take the complexity out of managing your institutional facilities."
    ];

    return (
        <ServiceLayout
            heroText="Institutional Facility Management"
            heroImage={institutional}
            title="Integrated Facilities Management for Large Institutions"
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Facility Management", link: "/services/facilities-management" },
                { label: "Institutional Facility Management" },
            ]}
         />
    )
};

export default InstitutionalFM;
