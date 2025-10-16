import React from "react";
import { AboutHero, AboutTabs, Footer, Header } from "../components";

const AboutUs = () => {
    return (
        <section className="font-roboto">
            <Header />
            <main className="pt-[7rem]">
                <AboutHero />
                <AboutTabs />
            </main>
            <Footer />
        </section>
    )
};

export default AboutUs;
