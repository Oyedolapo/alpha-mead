import React from "react";
import facility from "../assets/facility (1).jpg";
import { BriefcaseBusiness, Building, Home, GraduationCap, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ServiceLayout } from "../components";

const FacilityManagement = () => {
    const navigate = useNavigate();

    const cards = [
        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Corporate Facility Management",
            text: "Our Corporate Facility Management services are tailored for office buildings, corporate headquarters, and business parks.",
            link: "/facility/corporate",
        },
        {
            icon: <Building size={28} />,
            title: "Commercial Facility Management",
            text: "Our Commercial Facility Management services are specifically designed  for high-traffic environments such as malls, retail stores, banks, and hospitality venues.",
            link: "/facility/commercial",
        },
        {
            icon: <Home size={28} />,
            title: "Residential Facility Management",
            text: "Our Residential Facility Management services are specifically designed for residential estates, apartment complexes, and gated communities.",
            link: "/facility/residential",
        },
        {
            icon: <GraduationCap size={28} />,
            title: "Institutional Facility Management",
            text: "Our Institutional Facility Management services are designed to handle every aspect of facility operations for schools, universities, and healthcare institutions.",
            link: "/facility/institutional",
        },
        {
            icon: <Factory size={28} />,
            title: "Industrial Facility Management",
            text: "Our Industrial Facility Management services are designed to meet the unique challenges of these environments, helping you maintain peek operational efficiency.",
            link: "/facility/industrial",
        },
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
        "At Alpha Mead, we specialize in integrated facilities management solutions designed to optimize the performance and longevity of your assets. We go beyond standard maintenance, offering comprehensive services that ensure your built environment is not only functional but also aligned with your strategic business objectives.",
        "Our expert team provides end-to-end commercial property management and building maintenance services in Nigeria and across Africa. We manage everything from hard and soft facilities services to sophisticated corporate real estate management.",
        "Whether you oversee a single building or a vast portfolio, Alpha Mead provides the expertise and resources to elevate your facility management. This allows you to focus on your core business, confident that your infrastructure is operating at peak efficiency. Partner with us for reliable facilities management that delivers real value and peace of mind."
    ];

    return (
        <ServiceLayout
            heroText="FACILITIES MANAGEMENT (AMF)"
            heroImage={facility}
            title="Making The Best Of Your Built Environment"
            paragraphs={paragraphs}
            cards={linkedCards}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Facility Management" },
            ]}
        />
    );
};

export default FacilityManagement;
