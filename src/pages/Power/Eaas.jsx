import React from "react";
import { ServiceLayout } from "../../components";
import Energy from "../../assets/energy.jpg"

const Eaas = () => {
    const paragraphs = [
        "Our Energy-as-a-Service (EaaS) model provides a flexible and affordable alternative to traditional energy ownership. We deliver end-to-end energy solutions that cover system financing, installation, operation, and maintenance — allowing clients to focus on their core business while enjoying uninterrupted power supply.",
        "Through this service, clients benefit from predictable energy costs, improved reliability, and a significant reduction in carbon footprint. Alphamead takes full responsibility for energy system performance and lifecycle management, ensuring efficiency, uptime, and scalability.",
        "This approach supports organizations looking to transition from capital-intensive energy ownership to an operational expenditure model that guarantees sustainability, cost savings, and convenience."
    ];


    return (
        <ServiceLayout
            heroText="Energy-as-a-Service (EaaS)"
            heroImage={Energy}
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Power Solutions", link: "/services/power-solutions" },
                { label: "Energy-as-a-Service (EaaS)" },
            ]}
         />
    )
};

export default Eaas;
