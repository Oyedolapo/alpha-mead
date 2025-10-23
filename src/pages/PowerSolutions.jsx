import React from "react";
import PowerImg from "../assets/POWER-SOLUTIONS.jpg";
import { BriefcaseBusiness, Building, Home, GraduationCap, Factory } from "lucide-react";
import { ServiceLayout } from "../components";
import { useNavigate } from "react-router-dom";

const PowerSolutions = () => {
    const navigate = useNavigate();

    const cards = [
        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Energy-as-a-Service (EaaS)",
            text: "Alphamead Group operates a solar inverter system as an alternative to diesel generator and public power supply.",
            link: "/power-solutions/eaas",
        },
        {
            icon: <Building size={28} />,
            title: "Utility Billing Service",
            text: "Under this model, we manage energy procurement and billing on behalf of clients by interfacing directly with the utility ",
            link: "/power-solutions/utility-billing",
        },
        {
            icon: <Home size={28} />,
            title: "Alternative Power Solution (Solar Inverter Systems)",
            text: "We design, install, and maintain solar inverter systems to provide reliable and sustainable backup or primary power solutions.",
            link: "/power-solutions/alternative-power",
        },
        {
            icon: <GraduationCap size={28} />,
            title: "Electrical Systems and Services Installation",
            text: "We offer complete electrical infrastructure deployment for commercial and industrial facilities.",
            link: "/power-solutions/electrical-systems-and-services",
        }
    ];

    // Add navigation on card click
    const linkedCards = cards.map(card => ({
        ...card,
        icon: card.icon,
        title: card.title,
        text: card.text,
        onClick: () => navigate(card.link),
    }));

    const paragraphs = [
        "Alphamead Group operates a <span class='font-bold'>solar inverter system as an alternative to diesel generator and public power supply</span>, empowering residents in high-demand area to access reliable solar power systems.",
        "This system is designed to deliver reliable and efficient energy performance, supporting a range of scalable configurations to meet diverse power needs. It integrates high-output solar panels, advanced lithium iron phosphate (LFP) battery storage, and a robust voltage framework to ensure consistent energy supply, flexibility in installation, and long-term sustainability."
    ]

    return (
        <ServiceLayout
            heroText="POWER SOLUTIONS"
            heroImage={PowerImg}
            paragraphs={paragraphs}
            cards={linkedCards}
            caseStudy={true}
            cardText="Core Service Offerings"
            caseLink="/power-solutions/case-studies"
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Power Solutions" },
            ]}
        />
    );
};

export default PowerSolutions;
