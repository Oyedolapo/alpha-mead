import React from "react";
import FFMImg from "../../assets/FFM.jpg";
import { ServiceLayout } from "../../components";


const FFM = () => {
    const paragraphs = [
        "Equip yourself with the skills needed to thrive in the growing field of facilities management with Alpha Mead Training Centre’s Fundamentals of Facilities Management (FFM) course.",
        "This comprehensive program is specifically designed to bridge the significant talent gap in Nigeria’s rapidly expanding facilities management industry and across the West African coast. Our FFM course provides a solid foundation in the core principles and best practices of modern facilities management, ensuring you are well-prepared for a successful career.",
        "Learn how to optimize building performance, enhance occupant safety, and improve operational efficiency. Whether you’re a newcomer or a professional looking to advance, this course is your gateway to becoming a highly sought-after expert in the growing field of facilities management in Nigeria."
    ]

    return (
        <ServiceLayout
            heroText="Fundamentals of Facilities Management (FFM)"
            heroImage={FFMImg}
            title="Launch Your Career with Fundamentals of Facilities Management (FFM)"
            paragraphs={paragraphs}
            registerBtn={true}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Training Services (AMTC)", link: "/services/training-services" },
                { label: "Fundamentals of Facilities Management (FFM)" }
            ]}
        />
    );
};

export default FFM;
