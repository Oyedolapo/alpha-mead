import React from "react";
import { ContactForm, ContactHero, ContactMap, Footer, Header } from "../components";

const ContactUs = () => {
    return (
        <section className="font-roboto">
            <Header />
            <main className="pt-[7rem]">
                <ContactHero />
                <ContactForm />
                <ContactMap />
            </main>
            <Footer />
        </section>
    )
};

export default ContactUs;
