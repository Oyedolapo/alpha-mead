import React from "react";
import { ContactForm, ContactHero, ContactMap, Footer, Navbar } from "../components";

const ContactUs = () => {
    return (
        <section className="font-roboto">
            <Navbar />
            <main className="pt-[10rem] md:pt-[11rem] lg:pt-[12rem]">
                <ContactHero />
                <ContactForm />
                <ContactMap />
            </main>
            <Footer />
        </section>
    )
};

export default ContactUs;
