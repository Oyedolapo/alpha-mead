import React from "react";
import HealthcareImg from "../assets/Health-care.jpg"
import { ServiceLayout } from "../components";

const Health = () => {
    const paragraphs = [
        "Alpha Mead Healthcare Management Services (AMHS), a subsidiary of the Alpha Mead Group, is a business dedicated to transforming the delivery of healthcare management services in Nigeria by enhancing the provision of secondary, tertiary, and public healthcare services.",
        "Over the years, AMHS has established strong partnerships with medical institutions and global healthcare providers to deliver efficient and high-quality healthcare administration. These collaborations have enhanced access to advanced medical equipment and specialized healthcare management services.",
        "AMHS has consistently managed diagnostic centres in key public hospitals- such as Gbagada, Alimosho and LUTH General Hospital, maintaining 98% critical medical equipment uptime and 100% patient service impression since inception. As of 2024, the company’s operations are valued at over ₦400 million.",
        "<span class='font-bold'>Product & Services</span>",
        `<ol class='list-decimal marker:text-green-600 px-4'>
            <li class="my-4">Diagnostic Management Services</li>
            <li>Hospital Management Services</li>
            <li class="my-4">Picture Archiving & Communication System (PACS) Solution/Technology</li>
            <li>Healthcare Facilities Management</li>
            <li class="my-4">Modular Health Facility (MHF)</li>
            <li>Telemedicine</li>
        </ol>`
    ]

    return (
        <ServiceLayout
            heroText="HEALTHCARE MANAGEMENT"
            heroImage={HealthcareImg}
            title="Bridging the Gap to Affordable, Efficient Medical Care"
            paragraphs={paragraphs}
            caseStudy={true}
            caseLink="/healthcare-management/case-studies"
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Healthcare Management" },
            ]}
        />
    );
};

export default Health;
