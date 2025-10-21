import React from "react";
import { Header, Footer } from "../components";
import BuyPropertyHero from "../components/BuyPropertyHero";
import BuyPropertyTabs from "../components/BuyPropertyTabs";

const BuyProperty = () => {
  return (
    <section className="font-roboto">
      <Header />
      <main className="pt-[7rem]">
        <BuyPropertyHero />
        <BuyPropertyTabs />
      </main>
      <Footer />
    </section>
  );
};

export default BuyProperty;
