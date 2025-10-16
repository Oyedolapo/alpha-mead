// components/OurRealDifference.js
import React from 'react';
import { features } from '../constants/data';

const OurRealDifference = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">Our Real Difference</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 min-h-[220px] flex flex-col"
            >
              <div className="flex flex-col flex-grow">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-[#71bf4f] mb-4 leading-tight min-h-[60px] flex items-center justify-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
              
              <div className="mt-6">
                <a 
                  href={feature.link}
                  className="bg-[#71bf4f] hover:bg-green-600 text-white px-6 py-2 rounded block text-center transition-colors"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRealDifference;
