import React from "react";
import ProptechImg from "../assets/Proptech.jpg"
import { BriefcaseBusiness, Building, Home, GraduationCap, Factory } from "lucide-react";
import { ServiceLayout } from "../components";
import { useNavigate } from "react-router-dom";

const PropTech = () => {
    const navigate = useNavigate();

    const cards = [
        {
            icon: <BriefcaseBusiness size={28} />,
            title: "Eye-on-site",
            text: "As part of AlphaMead's commitment to cutting-edge real estate solutions, we're proud to introduce EyeOnSite - a powerful application",
            link: "/prop-tech/eye-on-site",
        },
        {
            icon: <Building size={28} />,
            title: "Call2Fix",
            text: "Call2fix is an on-demand service that instantly connects you with verified, professional artisans and workmen right iin your area.",
            link: "/prop-tech/call2fix",
        },
        {
            icon: <Home size={28} />,
            title: "Alpha CMMS",
            text: "In today's complex industrial landscape, efficient maintenance isn;t just an advantage, it is necessity. Alpha Mead offers a robust Computerized",
            link: "/prop-tech/alpha-cmms",
        },
        {
            icon: <GraduationCap size={28} />,
            title: "Security Management System",
            text: "At Alphamead, we offer a comprehensive Security Management System designed to safeguard lives, assets, and infrastructure through cutting-edge technology",
            link: "/prop-tech/security-management-system",
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
        "At Alpha Mead, we’re dedicated to revolutionizing the real estate industry, and our Property Technology Solutions (PROPTECH) suite is the driving force. We use advanced technology to bring unparalleled efficiency, intelligence, and ease to managing your properties. Our PROPTECH solutions are designed to tackle real-world problems, boost asset performance, and provide property owners and service providers with the tools they need to succeed.",
        "<span class='font-bold'>What We Offer:</span>",
        "Our PROPTECH suite is more than just a collection of softwares; it’s a comprehensive ecosystem of smart solutions tailored for the modern real estate landscape.",
        "We leverage technologies like: Internet of Things (IoT), Artificial Intelligence (AI) and Machine Learning (ML), and Cloud Computing.",
        "<span class='font-bold'>The Alpha Mead Difference:</span>",
        "Unlike traditional property management, we provide a holistic, tech-first approach.",
        "Our solutions enable you to:",
        `<ul class="list-disc marker:text-green-600 px-3">
            <li class="mt-3 mb-8">Enhance efficiency by automating manual processes, freeing up your time to focus on strategic growth.</li>
            <li>Gain intelligence by transforming raw data into actionable insights. Our dashboards and analytics tools give you a clear, 360-degree view of your property’s performance, helping you make data-driven decisions.</li>
            <li class="my-8">Increase convenience by creating a seamless experience through simplification of every interaction.</li>
        </ul>`,
        "Our PROPTECH suite is a testament to our commitment to innovation. We’re not just managing properties; we’re creating smarter, more sustainable, and more profitable real estate ecosystems."
    ]

    return (
        <ServiceLayout
            heroText="PROPERTY TECHNOLOGY SOLUTIONS (PROPTECH)"
            heroImage={ProptechImg}
            title="Transforming Real Estate with Technology"
            cards={linkedCards}
            paragraphs={paragraphs}
            caseStudy={true}
            caseLink="/prop-tech/case-studies"
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Property Technology Solutions (Proptech)" },
            ]}
        />
    );
};

export default PropTech;
