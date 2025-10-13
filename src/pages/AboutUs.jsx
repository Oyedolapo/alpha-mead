import React from "react";
import { AboutHero, AboutTabs, Footer, Header } from "../components";

const AboutUs = () => {
    return (
        <section className="font-roboto">
            <Header />
            <main className="pt-[10rem] md:pt-[11rem] lg:pt-[12rem]">
                <AboutHero />
                <AboutTabs />
            </main>
            <Footer />
        </section>
    )
};

export default AboutUs;
