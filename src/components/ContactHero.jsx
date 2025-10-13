import React from "react";
import contactBanner from '../assets/contactBanner.jpg'; 

const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[30vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${contactBanner})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 bg-opacity-30"></div>
      <h1 className="relative text-white text-6xl font-bold z-10">Contact Us</h1>
    </section>
  );
};

export default ContactHero;
