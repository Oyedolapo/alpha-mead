import React from "react";
import RealEstateImg from "../assets/REAL-ESTATE.jpg";
import { ServiceLayout } from "../components";

const RealEstate = () => {
    const paragraphs = [
        "Alpha Mead Development Company (AMDC) is Nigeria’s ﬁrst Real Estate Development & Infrastructure Company certified to International Standards (ISO 9001:2015) by the United Kingdom Accreditation Services (UKAS). Established in 2013, our goal is to lower the entry barrier to home ownership for middle income Africans; develop and manage Infrastructure projects for government and private investors.",
        "<span class='font-bold'>Offerings:</span>",
        `<ol>
            <li class="my-8"><span class='font-bold'>1. Property Development/Construction Management:</span> AMDC Property development and Project Construction Management Arm is aimed at constructing quality and affordable buildings and transforming land or existing properties into more valuable real estate assets through planning, design, construction, renovation, or repurposing — for residential, commercial, or mixed-use purposes. AMDC’s Goal is to be a major stakeholder in bridging Nigeria’s high housing gap with quality and affordable homes</li>
            <li><span class='font-bold'>2. Real Estate Investment:</span> AMDC is focused on creating high value real estate and infrastructure development project and advisory services. We specialize in joint venture structuring, project execution, and stakeholder engagement, providing clients with comprehensive solutions for residential, commercial and mixed-use development. With a focus on sustainable design, financial viability and long-term community value.</li>
            <li class="my-8"><span class='font-bold'>3. Site and Services Scheme:</span> The Infrastructure Site and Service Scheme is AMDC real estate development strategy where we provide plots of land (sites) that are pre-equipped with basic infrastructure and essential services, making them ready for immediate residential, commercial, or industrial development. This infrastructure includes:  Site Clearing & Sand Filling, Plot demarcation and planning, Road Network & Drainage newtwork planning, Power, Water & Sewage system Planning</li>
            <li><span class='font-bold'>4. Mortgage:</span> Mortgage financing is a home loan arrangement where a financial institution (usually a bank or government-backed agency) lends money to a buyer to purchase a property, which is then repaid over an agreed period with interest. The property serves as collateral until the loan is fully repaid. In simpler terms:  You move in now. Pay over time. Own it forever.</li>
            <li class="my-8"><span class='font-bold'>5. Customer Finance:</span> Customer Financing refers to the structured payment options offered by AMDC to make property acquisition more affordable and accessible for buyers. Rather than requiring full payment upfront, financing models allow customers to spread payments over time or access credit through partnerships with banks, cooperatives, or internal company plans.</li>
            <li><span class='font-bold'>6. Landing Banking:</span> Land Banking is a core strategic investment offering by AMDC. It involves the acquisition of high-potential, undeveloped land, which is held over a period of time to position it for future sale, lease, or development — with the ultimate goal of generating significant profit.</li>
        </ol>`
    ]

    return (
        <ServiceLayout
            heroText="REAL ESTATE DEVELOPMENT (AMDC)"
            heroImage={RealEstateImg}
            title="Driving Real Estate & Infrastructure for Africa"
            paragraphs={paragraphs}
            caseStudy={true}
            caseLink="/real-estate/case-studies"
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Real Estate Development (AMDC)" },
            ]}
        />
    );
};

export default RealEstate;
