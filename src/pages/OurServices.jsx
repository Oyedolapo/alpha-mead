import React from "react";
import { Footer, Header, InterBusinessHero, InterBusinessTabs } from "../components";
import Service from '../assets/service.jpg';
import ServiceTabs from "../components/Services/ServiceTabs";

const OurServices = () => {
    return (
        <section className="font-roboto">
            <Header />
                <main className="pt-[7rem]">
                    <InterBusinessHero text='Our Services' image={Service}/>
                    <ServiceTabs />
                </main>
            <Footer />
        </section>
    )
};

export default OurServices;

