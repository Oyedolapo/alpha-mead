import { useEffect, useState } from "react";
import { Footer, Header, HeroSlider, HowWeMakeDifference, OurRealDifference, RealInsights, Testimonials, WhereWeMakeDiff, } from "../components";
import { sections } from "../constants/data";
import { RxCaretUp } from "react-icons/rx";

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Detect and store navbar height dynamically
    const navbar = document.querySelector("header");
    if (navbar) setNavbarHeight(navbar.offsetHeight);

    const handleResize = () => {
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const btn = document.getElementById("backToTop");
    const toggleButton = () => {
      if (window.scrollY > 300) btn.classList.remove("hidden");
      else btn.classList.add("hidden");
    };
    window.addEventListener("scroll", toggleButton);
    return () => window.removeEventListener("scroll", toggleButton);
  }, []);

 

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="font-roboto relative">
      <Header />
      <main style={{ marginTop: navbarHeight }}>
        <div id="hero">
          <HeroSlider />
        </div>

        <div className="pt-10">
          {/* <section id="how-we-make-difference">
            <HowWeMakeDifference />
          </section> */}

          <section id="our-real-difference">
            <OurRealDifference />
          </section>

          <section id="where-we-make-diff">
            <WhereWeMakeDiff />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="real-insights">
            <RealInsights />
          </section>
        </div>
      </main>

      {/* Right-side black navigator */}
      <div className="fixed right-10 top-[65%] -translate-y-1/2 flex flex-col items-center space-y-10 z-40 bg-black/40 py-3 px-3 rounded-3xl">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.id)}
            className="relative w-4 h-4 rounded-full bg-white/30 opacity-60 hover:opacity-100 transition duration-300 cursor-pointer group"
            aria-label={section.label}
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-3 py-2 rounded whitespace-nowrap transition duration-300">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hidden fixed bottom-6 right-6 bg-white border border-gray-300 shadow-lg rounded-full p-3 text-gray-700 hover:text-white hover:bg-green-600 transition duration-300 z-50"
      >
        <RxCaretUp className="h-5 w-5"/>
      </button>

      <section id="footer">
        <Footer />
      </section>
    </section>
  );
};

export default Home;
