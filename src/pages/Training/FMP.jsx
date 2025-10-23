import React from "react";
import FMPImg from "../../assets/FMP.jpg";
import { ServiceLayout } from "../../components";


const FMP = () => {
    const paragraphs = [
        "The Facility Management Professional (FMP) is a globally recognized certification offered by the International Facility Management Association (IFMA). This credential is ideal for professionals seeking to enhance their skills and gain credibility in the rapidly expanding facilities management industry in Nigeria and across the West African coast.",
        "As an authorized IFMA Education Training Affiliate (ETA), Alpha Mead Training Centre is licensed to market, register, and deliver world-class FMP training. We cover key regions including Nigeria, Ghana, Cameroon, Côte d’Ivoire, Senegal, and Rwanda, ensuring you receive globally benchmarked and practical instruction.",
        "The FMP program is structured into four essential modules:",
        `<ul class='list-disc ml-3 marker:text-green-600'>
            <li>Finance and Business: Master financial management and strategic business skills.</li>
            <li>Leadership and Strategy: Develop your leadership capabilities to drive organizational performance.</li>
            <li>Project Management: Learn to effectively plan and execute facilities-related projects.</li>
            <li>Operations and Maintenance: Gain in-depth knowledge of building operations and maintenance best practices.</li>
        <ul>`,
        "Participants can register for individual modules or benefit from a discounted fee for the complete four-module program. With support from Alpha Mead’s industry experts, you’ll be well-prepared to achieve your FMP certification and elevate your career in facilities management. We also offer other essential IFMA programs, including the Certified Facility Manager (CFM) and the Sustainability Facilities Management (IFMA SFP)."
    ]

    return (
        <ServiceLayout
            heroText="IFMA FMP Certification Training"
            heroImage={FMPImg}
            title="Advance Your Facilities Management Career"
            paragraphs={paragraphs}
            registerBtn={true}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Training Services (AMTC)", link: "/services/training-services" },
                { label: "IFMA FMP Certification Training" }
            ]}
        />
    );
};

export default FMP;
