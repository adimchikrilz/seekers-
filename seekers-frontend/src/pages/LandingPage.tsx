import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSlideshow from "../components/landing/HeroSlideshow";
import MarqueeBand from "../components/landing/MarqueeBand";
import AboutSection from "../components/landing/AboutSection";
import PullQuote from "../components/landing/PullQuote";
import FacilitiesSection from "../components/landing/FacilitiesSection";
import NewsSection from "../components/landing/NewsSection";
import CtaBanner from "../components/landing/CtaBanner";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <HeroSlideshow />
      <MarqueeBand />
      <AboutSection />
      <PullQuote />
      <FacilitiesSection />
      <NewsSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
