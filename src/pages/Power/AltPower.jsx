import React from "react";
import { ServiceLayout } from "../../components";
import AltPowerSolution from "../../assets/AltPowerSolution.jpg"

const AltPower = () => {
    const paragraphs = [
        "We design, install, and maintain solar inverter systems to provide reliable and sustainable backup or primary power solutions for our clients which is alternative to power grid. This service is tailored for clients aiming to reduce grid dependency, lower carbon footprint, and cut long-term energy costs.",
        "<span class='font-bold'>Our solution includes:</span>",
        `<ol class='list-decimal marker:text-green-600 px-4'>
            <li class='my-3'>Site assessment and load profiling</li>
            <li>Custom system design (solar panels, inverters, batteries)</li>
            <li class="my-3">Installation and commissioning</li>
            <li>Ongoing maintenance and performance optimization</li>
        </ol>`
    ];

    return (
        <ServiceLayout
            heroText="Alternative Power Solution (Solar Inverter Systems)"
            heroImage={AltPowerSolution}
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Power Solutions", link: "/services/power-solutions" },
                { label: "Alternative Power Solution (Solar Inverter Systems)" },
            ]}
         />
    )
};

export default AltPower;
