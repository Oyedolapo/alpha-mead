import React from "react";
import { Footer, Header, InterBusinessHero, InterBusinessTabs } from "../components";
import InterBusinessImg from '../assets/inter-business.jpg';

const InterBusiness = () => {
    return (
        <section className="font-roboto">
            <Header />
                <main className="pt-[7rem]">
                    <InterBusinessHero text='International Business' image={InterBusinessImg}/>
                    <InterBusinessTabs />
                </main>
            <Footer />
        </section>
    )
};

export default InterBusiness;

