import React from "react";
import PolicyCard from "./PolicyCard";

const CorporatePolicies = () => {
    return (
        <div>
            <h2 className="text-5xl font-light text-gray-800 mb-6">Policies & Standards</h2>
            <div className="space-y-6 text-lg">
                <p className="text-justify">
                    Alpha Mead Group has a well-defined set of policies and processes for administrative, operational and human resource purposes. The processes are well understood and adhered to by every employee. The Quality Assurance team ensures 100 percent compliance with the Quality Management Systems (QMS) and International Standard Organization (ISO) requirements as they relate to processes, systems and procedures.
                </p>
                
                <p>
                    As a socially responsible organization, our operations are guided by strict, well-documented policies, procedures and standards so we can continue to support you with business solutions that improve people productivity, business profitability and environmental responsibilities. It's another way we support you to make real difference.
                </p>
                
                <p>Click on the links below to view our various policies:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {/* Policy Cards */}
                    <PolicyCard 
                        image="../wp-content/uploads/2019/05/RISKID-event-SHE.jpg"
                        title="HSE POLICY"
                        link="../wp-content/uploads/2019/08/Group-Policy-Statement.pdf"
                    />

                    <PolicyCard 
                        image="../wp-content/uploads/2019/05/wb.jpg"
                        title="QUALITY MANAGEMENT POLICY"
                        link="../wp-content/uploads/2020/10/AMF-corporate-QHSE-Policy-Statement.html"
                    />

                    <PolicyCard 
                        image="../wp-content/uploads/2020/10/thumb-the-5-company-policies-you-need-to-have-in-writing.png"
                        title="ESG POLICY"
                        link="../wp-content/uploads/2020/10/AMDC-Policy-Statement-1.html"
                    />

                    <PolicyCard 
                        image="../wp-content/uploads/2020/10/thumb-the-5-company-policies-you-need-to-have-in-writing.png"
                        title="EQUAL OPPORTUNITY EMPLOYEE POLICY"
                        link="../wp-content/uploads/2020/10/AMDC-Policy-Statement-1.html"
                    />

                    <PolicyCard 
                        image="../wp-content/uploads/2019/05/wb.jpg"
                        title="WHISTLEBLOWING POLICY"
                        link="../wp-content/uploads/2019/08/Whistle-Blowing-Policy.pdf"
                    />

                    <PolicyCard 
                        image="../wp-content/uploads/2020/10/thumb-the-5-company-policies-you-need-to-have-in-writing.png"
                        title="DATA PROTECTION POLICY"
                        link="../wp-content/uploads/2020/10/AMDC-Policy-Statement-1.html"
                    />
                </div>
            </div>
        </div>
    )
};

export default CorporatePolicies;
