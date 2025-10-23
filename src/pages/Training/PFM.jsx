import React from "react";
import PFMImg from "../../assets/PFM.jpg";
import { ServiceLayout } from "../../components";


const PFM = () => {
    const paragraphs = [
        "Take your expertise up many steps ahead with Alpha Mead Training Centre’s (AMTC) Professional Facilities Management (PFM) course. Designed for aspiring and experienced FM professionals in Nigeria, this program offers a transformative learning experience with globally benchmarked training.",
        "Our PFM course goes beyond the basics, equipping you with advanced, experiential skills to significantly boost your career trajectory and enhance your organization’s performance. You will gain in-depth knowledge of strategic planning, financial management, and operational excellence, enabling you to deliver world-class facilities management.",
        "This is the ideal course for professionals aiming to become industry leaders and drive superior business outcomes through effective and efficient facilities management practices."
    ]

    return (
        <ServiceLayout
            heroText="Professional Facilities Management (PFM)"
            heroImage={PFMImg}
            title="Advance Your Expertise with Professional Facilities Management (PFM)"
            paragraphs={paragraphs}
            registerBtn={true}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Training Services (AMTC)", link: "/services/training-services" },
                { label: "Professional Facilities Management (PFM)" }
            ]}
        />
    );
};

export default PFM;
