// components/HowWeMakeDifference.js
import React from 'react';
import Icon1 from '../assets/HowWeMake1.png'
import Icon2 from '../assets/HowWeMake2.png'
import Icon3 from '../assets/HowWeMake3.png'
import Icon4 from '../assets/HowWeMake4.png'

const HowWeMakeDifference = () => {
  const features = [
    {
      icon: Icon1,
      title: 'RESEARCH ADVISORY & PROPERTY MANAGEMENT',
      description: 'From project conception, through management, we provide you with unique perspectives rich in both data and local content.',
      link: '/real-estate-advisory'
    },
    {
      icon: Icon2,
      title: 'REAL ESTATE & INFRASTRUCTURE DEVELOPMENT',
      description: 'Whether you are an individual, corporation or government agency; our experience will work for you.',
      link: '/development'
    },
    {
      icon: Icon3,
      title: 'FACILITIES MANAGEMENT',
      description: 'Across businesses, in over 10 African countries, we are creating safe and comfortable places for people to live, work and play.',
      link: '/facilities'
    },
    {
      icon: Icon4,
      title: 'HEALTHCARE MANAGEMENT SERVICES',
      description: 'We work with all stakeholders to ensure that people have access to quality healthcare they can afford.',
      link: '/healthcare'
    }
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-10 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">
            How We Make Real Difference
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[520px]"
            >
              <div className="flex flex-col flex-grow">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-24 h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-[#71bf4f] mb-4 leading-tight min-h-[80px] flex items-center justify-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
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

export default HowWeMakeDifference;
