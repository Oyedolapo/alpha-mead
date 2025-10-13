// components/WhereWeMakeDifference.js
import React from 'react';
import BackgroundImage from '../assets/footprint.jpg';

const WhereWeMakeDifference = () => {
  const countries = [
    'NIGERIA', 'GHANA', 'CAMEROON', 'SOUTH AFRICA', 'TANZANIA', 'SENEGAL',
    'KENYA', 'RWANDA', 'BOTSWANA', 'IVORY COAST', 'MOROCCO', 'UGANDA'
  ];

  return (
    <section className="relative py-20 bg-green-950 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">Where We Make Real Difference</h2>
        
        <p className="text-lg lg:text-xl mb-12 max-w-6xl mx-auto leading-relaxed">
          From Nigeria to Ghana, Cameroon to Senegal, South Africa to Kenya; and more 10 other African countries; 
          we remain true to our vision; growing steady capacity and developing local and international opportunities 
          to help customers make real difference in the things that matter to them.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-lg">
          {countries.map((country, index) => (
            <div key={index} className="hover:text-[#71bf4f] lg:text-2xl text-left lg:text-center font-bold transition-colors cursor-pointer">
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeMakeDifference;