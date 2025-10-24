import React from "react";
import { Header, MediaHero, MediaTabs } from "../components";

const MediaEvents = () => {
    return (
        <section className="font-roboto">
            <Header />
            <main className="pt-[7rem]">
                <MediaHero />
                <MediaTabs />
            </main>
        </section>
    )
};

export default MediaEvents;
