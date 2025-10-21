import React from "react";
import training from "../assets/Training.jpg";
import { BriefcaseBusiness, Building, Home, GraduationCap, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ServiceLayout } from "../components";

const TrainingServices = () => {
    const navigate = useNavigate();

    const cards = [
        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Fundamentals of Facilities Management (FFM)",
            text: "Designed to bridge talent gap in  a rapidly expanding FM industry in Nigeria & Western Coast of Africa.",
            link: "/training/ffm",
        },
        {
            icon: <Building size={28} />,
            title: "Professional Facility Management (PFM)",
            text: "Designed to develop capabilities of FM professionals with experential and globally benchmarked training to boost career and organizational performance.",
            link: "/training/pfm",
        },
        {
            icon: <Home size={28} />,
            title: "Business of Facilities Management (BFM)",
            text: "Designed to empower entrepreneurs to enter and thrive in a financially viable FM industry with the skills to launch, grow and lead sustainable business without prior industry experience.",
            link: "/training/bfm",
        },
        {
            icon: <GraduationCap size={28} />,
            title: "Facility Management Professional (FMP)",
            text: "The Facility Management Professional (FMP) is a globally recognized certification offered by the International Facility Management Association (IFMA).",
            link: "/facility/fmp",
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
        "Alpha Mead Facility Management Training is a specialized capacity development initiative designed to bridge the talent and skills gap in Nigeria’s rapidly growing Facility Management (FM) industry and across the West African region. Our programs are structured to empower professionals and entrepreneurs alike—whether you’re seeking to enhance your FM career, improve organizational performance, or launch a sustainable FM business.",
        "Through globally benchmarked and experiential learning methods, we deliver practical, industry-relevant training that equips participants with the technical expertise, leadership capabilities, and entrepreneurial skills needed to succeed in the dynamic FM landscape. From seasoned professionals to newcomers with no prior experience, AlphaMead Training provides the tools and knowledge to thrive.",
    ]

    return (
        <ServiceLayout
            heroText="TRAINING SERVICES (AMTC)"
            heroImage={training}
            title="Developing Capacity, Refining Talents Into Marketable Skills"
            paragraphs={paragraphs}
            cards={linkedCards}
            caseStudy={true}
            caseLink="/training-services/case-studies"
            training={true}
        />
    );
};

export default TrainingServices;
