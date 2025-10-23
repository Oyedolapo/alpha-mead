import React from "react";
import { ServiceLayout } from "../../components";
import AlphaCmmsImg from "../../assets/Alpha-CMMS.jpg"

const Cmms = () => {
    const paragraphs = [
        "In today’s complex industrial landscape, efficient maintenance isn’t just an advantage, it’s a necessity. Alpha Mead offers a robust Computerized Maintenance Management System (CMMS) designed to centralize your maintenance information and streamline operations, ensuring your physical infrastructure performs at its peak.",
        "Our CMMS is a critical tool for various industries where physical assets are vital, including manufacturing, oil and gas production, power generation, construction, and transportation. By providing a comprehensive overview and control over your maintenance activities, our CMMS helps you reduce downtime, extend asset lifespan, and improve overall operational efficiency.",
        "Key features of Alpha Mead’s CMMS include:",
        `<ul class='list-disc marker:text-green-600 px-4'>
            <li class='my-8'>Comprehensive Asset & Inventory Management: Gain complete control over your assets and inventory. Our system provides detailed insights into work requests, work orders, and payment order details, including work categories, Preventive Planned Maintenance (PPM) settings and requests, subcategories, requesters, and floats.</li>
            <li>Streamlined Request & Approval Workflows: Experience seamless request and approval processes. Our CMMS meticulously manages requester and approval action details, including defined approval limits, multiple approval levels, precise location tracking, and timestamps for every request.</li>
            <li class='my-8'>Efficient Procurement & Vendor Management: Simplify your procurement process with integrated vendor details and Goods Received Note (GRN) management. Our system also offers robust User and Admin Management features, including account and department management, personal detail tracking, report spooling, and customizable settings.</li>
            <li>Proactive Preventive Maintenance & Powerful Analytics: Move beyond reactive repairs with our advanced Preventive Maintenance capabilities. Leverage comprehensive reporting, in-depth analysis, and thorough auditing functionalities to make informed decisions and continuously optimize your maintenance strategies.</li>
        </ul>`,
        "With Alpha Mead’s CMMS, you’re not just managing maintenance; you’re transforming it into a strategic advantage."
    ]

    return (
        <ServiceLayout
            heroText="Alpha CMMS"
            heroImage={AlphaCmmsImg}
            title="Smarter Maintenance, Stronger Operations"
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Property Technology", link: "/services/property-technology" },
                { label: "Alpha Cmms" },
            ]}
         />
    )
};

export default Cmms;
