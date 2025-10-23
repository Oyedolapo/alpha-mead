import React from "react";
import { ServiceLayout } from "../../components";
import UtilityBill from "../../assets/utility-bill.jpg"

const UtilityBilling = () => {
    const paragraphs = [
        "Under this model, we manage energy procurement and billing on behalf of clients by interfacing directly with the utility provider (EKEDC). Clients are billed based on EKEDC actual tariff rates, an additional agreed-upon service tariff, and a 10% management or administrative fee for handling the coordination, monitoring, and reporting processes.",
        "This service simplifies the client’s utility interface and ensures proper load management, consumption analysis, and dispute resolution, while providing us with a cost recovery margin for our operational efforts.",
    ];

    return (
        <ServiceLayout
            heroText="Utility Billing Service"
            heroImage={UtilityBill}
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Power Solutions", link: "/services/power-solutions" },
                { label: "Utility Billing Service" },
            ]}
         />
    )
};

export default UtilityBilling;
