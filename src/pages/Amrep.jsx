import Home from "../components/AMREP/Home";
import About from "../components/AMREP/About";
import Contact from "../components/AMREP/Contact";
import { Footer, Header } from "../components";

const Amrep = () => {
  return (
    <section>
        <Header />
        <main className="pt-[7rem]">
            <Home />
            <About />
            <Contact />
            <Footer />
        </main>
    </section>
  )
};

export default Amrep;
