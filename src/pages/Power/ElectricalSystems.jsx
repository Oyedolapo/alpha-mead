import React from "react";
import { ServiceLayout } from "../../components";
import ElectricalSystemsImg from "../../assets/Electrical-Systems.jpg"

const ElectricalSystems = () => {
    const paragraphs = [
        "We offer complete electrical infrastructure deployment for commercial and industrial facilities. This includes:",
        `<ol class='list-decimal marker:text-green-600 px-4'>
            <li class='my-3'>Generator services and maintenance.</li>
            <li>Electrical distribution systems (panels, cabling, protection devices).</li>
            <li class="my-3">Power optimization devices.</li>
        </ol>`,
        "Compliance with local and international electrical standards. This service ensures operational readiness, safety, and energy efficiency across all client facilities, either as part of new installations or retrofitting existing structures.",
        "These service offerings position us as a comprehensive energy solutions provider, capable of meeting dynamic client needs ranging from power availability and quality, to cost optimization and sustainability compliance."
    ];

    return (
        <ServiceLayout
            heroText="Electrical Systems and Services Installation"
            heroImage={ElectricalSystemsImg}
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Power Solutions", link: "/services/power-solutions" },
                { label: "Electrical Systems and Services Installation" },
            ]}
         />
    )
};

export default ElectricalSystems;
