import React from "react";
import { AboutHero, AboutTabs, Footer, Navbar } from "../components";

const AboutUs = () => {
    return (
        <section className="font-roboto">
            <Navbar />
            <main className="pt-[10rem] md:pt-[11rem] lg:pt-[12rem]">
                <AboutHero />
                <AboutTabs />
            </main>
            <Footer />
        </section>
    )
};

export default AboutUs;
