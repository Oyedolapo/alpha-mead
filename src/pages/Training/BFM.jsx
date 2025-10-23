import React from "react";
import BFMImg from "../../assets/BFM.jpg";
import { ServiceLayout } from "../../components";


const BFM = () => {
    const paragraphs = [
        "Discover how to build a profitable and sustainable business in the thriving facilities management industry with Alpha Mead Training Centre’s (AMTC) Business of Facilities Management (BFM) course. This program is specifically designed for aspiring entrepreneurs, even those without prior industry experience, who want to launch, grow, and lead a successful FM company.",
        "Learn the essential business skills to navigate the financially viable FM market in Nigeria and beyond. Our expert-led training will empower you with the knowledge to create a solid business plan, manage finances, secure clients, and deliver exceptional service. Join us to transform your entrepreneurial vision into a thriving facilities management business.",
    ]

    return (
        <ServiceLayout
            heroText="Business of Facilities Management (BFM)"
            heroImage={BFMImg}
            title="Start a Successful Facility Management Business with Our BFM Course"
            paragraphs={paragraphs}
            registerBtn={true}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Training Services (AMTC)", link: "/services/training-services" },
                { label: "Business of Facilities Management (BFM)" }
            ]}
        />
    );
};

export default BFM;
