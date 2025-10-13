// components/OurRealDifference.js
import React from 'react';
import Icon1 from '../assets/RealDiff1.png';
import Icon2 from '../assets/certified-green.png';
import Icon3 from '../assets/competent-green.png';
import Icon4 from '../assets/records-green.png';

const OurRealDifference = () => {
  const features = [
    {
      icon: Icon1,
      title: 'TOTAL REAL ESTATE SOLUTIONS',
      description: 'Whether you are a business, individual or govt. agency looking to have an edge; with our solutions, you will Make a Real Difference.',
      link: '/our-projects'
    },
    {
      icon: Icon2,
      title: 'ISO 9001:2015',
      description: 'Whatever your Real Estate objectives are for Africa, we will match your global standards.',
      link: '/about-us'
    },
    {
      icon: Icon3,
      title: 'COMPETENT & DIVERSE WORKFORCE',
      description: 'With a growing strength of over 1,000 employees across Africa, we have the local capacity to deliver your global standards.',
      link: '/about-us'
    },
    {
      icon: Icon4,
      title: 'PROVEN TRACK RECORDS',
      description: 'Our resume of performance include delivering up to 97% SLA, achieving more than 85% customer satisfaction and recording zero fatality from inception to date.',
      link: '/about-us'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4">Our Real Difference</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 min-h-[520px] flex flex-col"
            >
              <div className="flex flex-col flex-grow">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-[#71bf4f] mb-4 leading-tight min-h-[60px] flex items-center justify-center">
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

export default OurRealDifference;
