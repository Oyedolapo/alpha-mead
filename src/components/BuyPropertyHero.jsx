import React from "react";
import BuyImage from "../assets/BuyImage.jpg"; // Temporary hero image

const BuyPropertyHero = () => {
  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${BuyImage})` }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-28 text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
          Buy/Rent Properties
        </h1>
      </div>
    </section>
  );
};

export default BuyPropertyHero;
