import React from "react";
import awards from "../assets/awards.png";

const Awards = () => {
    return (
        <div>
            <h2 className="text-5xl font-light text-gray-800 mb-6">Awards & Recognition</h2>
            <div className="space-y-6">
                <p className="text-justify">
                    Over the past 10 years, we have been recognized locally and internationally for supporting our customers to make real difference; including being named as one of the COMPANIES TO INSPIRE AFRICA by the London Stock Exchange Group.
                </p>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Some of the Milestones achieved during the years:</h3>
                        
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-4">AWARDS</h4>
                        <div className="space-y-3 text-gray-700 text-lg">
                            <p><strong>2019:</strong> Nigerian Stock Exchange & Business Day Media - Next Bull Award</p>
                            <p><strong>2019:</strong> London Stock Exchange Group (LSEG) - Company to Inspire Africa</p>
                            <p><strong>2018:</strong> Shell Nigeria Real Estate Forum - HSE Awards of Excellence</p>
                            <p><strong>2018:</strong> Eterra Nigeria - E-waste Champion</p>
                            <p><strong>2017:</strong> Middle East & Africa (MEA) Awards - Highest Quality Provider in Professional and Business Services</p>
                            <p><strong>2016:</strong> Nigeria Institute of Industrial Engineers (NIIE) - Most Outstanding Facilities Engineering Company</p>
                            <p><strong>2014:</strong> OshAssociation - Safety Merit Award</p>
                            <p><strong>2014:</strong> European CEO Award - Best Facilities Management Company of the Year</p>
                            <p><strong>2013:</strong> Real Estate Unite & Awards - Best Real Estate Support Service Company</p>
                            <p><strong>2013:</strong> Ernst & Young - Entrepreneur of the Year, (Femi Akintunde) West Africa (Emerging Categories).</p>
                            <p><strong>2012:</strong> IFMA Nigeria - Distinguished Facilities Management Practitioners</p>
                            <p><strong>2007:</strong> Shell Infrastructure Team - HSE Award for Excellence 2007</p>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-4">ACCREDITATIONS</h4>
                        <div className="space-y-2 text-gray-700 text-lg">
                            <p><strong>2018</strong> - ISO 9001:2015</p>
                            <p><strong>2014</strong> - IWFM Recognised Centre</p>
                            <p><strong>2012</strong> - IFMA Global Training Affiliate</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <img 
                            src={awards}
                            alt="Awards and Recognitions"
                            className="w-full max-w-6xl mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Awards;
