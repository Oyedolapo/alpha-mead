import React from "react";
import { ServiceLayout } from "../../components";
import EyeOnSiteImg from "../../assets/Eye-on-Site.jpg"

const Security = () => {
    const paragraphs = [
        "At Alphamead, we offer a comprehensive Security Management System designed to safeguard lives, assets, and infrastructure through cutting-edge technology and professional oversight. Our integrated solution combines surveillance, access control, and identity management to create a secure and controlled environment across residential, commercial, and industrial facilities.",
        "Our Security Management Solutions Include:",
        `<ol class='list-decimal marker:font-bold px-4'>
            <li class='my-8'>
                <div class='font-bold'>CCTV Monitoring</div>
                Real-time surveillance and video analytics to monitor premises, deter criminal activity, and provide evidence in case of incidents.
            </li>
            <li class='my-8'>
                <div class='font-bold'>Access Control System</div>
                Restrict and manage entry to sensitive areas using card readers, biometric systems, and keypads, ensuring only authorized personnel gain access.
            </li>
            <li class='my-8'>
                <div class='font-bold'>Intruder Detection</div>
                Intelligent sensors and alarms to detect unauthorized access or suspicious movements, triggering real-time alerts and response mechanisms.
            </li>
            <li class='my-8'>
                <div class='font-bold'>Guard Tour System</div>
                Digitally monitored patrol systems that track and verify security guard movements, ensuring accountability and optimal coverage of high-risk zones.
            </li>
            <li class='my-8'>
                <div class='font-bold'>Identity Management System</div>
                A robust system for verifying, recording, and managing personnel identities to strengthen access control and improve record-keeping.
            </li>
            
        </ol>`,
    ];

    return (
        <ServiceLayout
            heroText="Security Management System"
            heroImage={EyeOnSiteImg}
            title="Protecting What Matters with Alphamead"
            paragraphs={paragraphs}
            caseStudy={false}
            breadcrumbItems={[
                { label: "Alpha Mead", link: "/" },
                { label: "Property Technology", link: "/services/property-technology" },
                { label: "Security Management System" },
            ]}
         />
    )
};

export default Security;
