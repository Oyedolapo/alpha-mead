import React from "react";

const CSR = () => {
  return (
     <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Corporate Social Responsibility</h2>
            <div className="space-y-6">
                <p>
                At Alpha Mead, we believe making real difference is not only in the quality of services we provide to our customers. We believe making real difference is especially in the quality of life we support people to live in the different and cross-cultural environments where we operate. Our CSR activities resolves around Skill Development & Capacity Building, Health & Safety in Secondary/High Schools and Humanitarian & Philanthropy Services.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">
                    Cardiopulmonary Resuscitation Procedure training at Aunty Ayo Comprehensive Secondary School, Ikoyi, Lagos.
                    </h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                    {/* Image gallery would be implemented here */}
                    <div className="text-center text-gray-500">
                        Image Gallery Placeholder
                    </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-4">
                    Students of Building Department, University of Lagos Visit to Lekki Pearl Estate
                    </h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                    {/* Image gallery would be implemented here */}
                    <div className="text-center text-gray-500">
                        Image Gallery Placeholder
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
  )
};

export default CSR;
