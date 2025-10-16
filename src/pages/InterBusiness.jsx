import React from "react";
import { Footer, Header, InterBusinessHero, InterBusinessTabs } from "../components";

const InterBusiness = () => {
    return (
        <section className="font-roboto">
            <Header />
                <main className="pt-[7rem]">
                    <InterBusinessHero />
                    <InterBusinessTabs />
                </main>
            <Footer />
        </section>
    )
};

export default InterBusiness;

