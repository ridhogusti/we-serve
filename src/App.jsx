import { useEffect } from "react";
import WOW from "wow.js";
import "./App.css";

import BestChoice from "./components/BestChoice";
import Brands from "./components/Brands";
import CtaSection from "./components/CtaSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurShowCase from "./components/OurShowcase";
import StrongEcosystem from "./components/StrongEcosystem";

function App() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[100px]">
        <Header />
        <Hero />
        <Brands />
        <BestChoice />
        <StrongEcosystem />
        <OurShowCase />
        <Faq />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
