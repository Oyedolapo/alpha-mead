import React from "react";
import { ServiceLayout } from "../../components";
import Call2FixImg from "../../assets/Call2fix.jpg"

const Call2Fix = () => {
    const paragraphs = [
        "Call2Fix is an on-demand service that instantly connects you with verified, professional artisans and workmen right in your area. We designed Call2Fix to tackle the common frustrations of building maintenance. For customers, we deliver fast, reliable service. For artisans, we provide crucial capacity development. And for Small & Medium Scale (SME) businesses in Africa’s real estate sector, we’re a powerful engine for wealth and employment generation.",
        "<span class='font-bold'>Here’s what you can do with Call2Fix:</span>",
        "– Fast & Reliable Repairs: Get expert technicians for plumbing, electrical, AC repairs, carpentry, and much more.",
        "– Buy Materials with Ease: Find top-quality building materials, home improvement products, and spare parts at competitive prices.",
        "– Rent Equipment: Access essential tools and heavy-duty equipment without breaking the bank.",
        "– Trusted Service Providers: Our verified professionals ensure quality work every time, giving you peace of mind.",
        "– Seamless Booking & Payment: Schedule services, track orders, and make secure payments—all within one easy-to-use app.",
    ];

    return (
        <ServiceLayout
            heroText="Call2Fix"
            heroImage={Call2FixImg}
            title="Instant Building Maintenance Solutions"
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Property Technology", link: "/services/property-technology" },
                { label: "Call2Fix" },
            ]}
         />
    )
};

export default Call2Fix;
