// components/RealInsights.js
import React from 'react';
import RealInsightsImage from '../assets/real-insights-man.jpg'

const RealInsights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-x-20">
          {/* Image */}
          <div className="lg:w-[40%]">
            <img 
              src={RealInsightsImage}
              alt="Real Insights by Alpha Mead"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          {/* Text */}
          <div className="lg:w-1/2 mt-5 lg:mt-10">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 text-left">
              Real Insights by Alpha Mead
            </h2>
            
            <p className="text-gray-600 text-base font-medium mb-10 leading-relaxed text-left">
              Get insights, learn about trends and stay abreast of developments across Real Estate markets, sectors and industries.
            </p>
            
            <a 
              href="/realinsights"
              className="bg-[#71bf4f] hover:bg-green-600 text-white px-8 py-3 rounded inline-block transition-colors"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealInsights;
