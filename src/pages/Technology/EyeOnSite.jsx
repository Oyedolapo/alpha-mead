import React from "react";
import { ServiceLayout } from "../../components";
import EyeOnSiteImg from "../../assets/Eye-on-Site.jpg"

const EyeOnSite = () => {
    const paragraphs = [
        "As part of Alpha Mead’s commitment to cutting-edge real estate solutions, we’re proud to introduce <span class='font-bold'>EyeOnSite</span> – a powerful application designed to revolutionize your facility infrastructure, asset inspection, and reporting processes. EyeOnSite’s core functionality is to <span class='font-bold'>optimize and automate your site and location inspection reporting patterns</span>, bringing unprecedented efficiency and control to your operations.",
        "<span class='font-bold'>Why Choose EyeOnSite?</span>",
        "In today’s dynamic environment, manual inspection methods are simply not enough. EyeOnSite empowers you to:",
        "Improve Efficiency and Productivity: Move beyond outdated manual checklists. EyeOnSite streamlines asset inspection, saving valuable time and significantly increasing productivity across your portfolio.",
        "Enhance Accountability and Oversight: Combat truancy and ensure diligence among your managers. EyeOnSite provides transparent oversight, confirming that inspections are carried out as required, even when supervisors are not physically present on site.",
        "Ensure Asset Data Integrity: Gain a central, robust data repository for all your asset information. EyeOnSite facilitates in-depth analysis and intelligent gathering from your asset data, providing insights crucial for strategic decision-making.",
        "<span class='font-bold'>Key Aspects of EyeOnSite:</span>",
        "EyeOnSite delivers comprehensive reporting and insights, including:",
        `<ol class='list-decimal marker:text-green-600 px-4'>
            <li class='my-8'>Asset Status Reports: Get real-time updates on the current condition and operational status of all your assets.</li>
            <li>Asset Health Reports: Understand the long-term health and potential maintenance needs of your equipment and infrastructure.</li>
            <li class='my-8'>Facility Status Reports: Obtain a holistic view of your entire facility’s condition and performance.</li>
            <li>And much more, offering a complete picture for proactive management.</li>
        </ol>`,
        "With EyeOnSite, Alpha Mead empowers you to achieve superior operational efficiency, maintain impeccable asset integrity, and ensure complete accountability across your facilities."
    ];

    return (
        <ServiceLayout
            heroText="Eye-on-site"
            heroImage={EyeOnSiteImg}
            title="Our Advanced Facility Management Solution."
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Property Technology", link: "/services/property-technology" },
                { label: "EyeOnSite" },
            ]}
         />
    )
};

export default EyeOnSite;
