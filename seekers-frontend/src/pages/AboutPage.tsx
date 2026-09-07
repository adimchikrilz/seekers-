import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import IntroSection from "../components/about/IntroSection";
import VisionMission from "../components/about/VisionMission";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AchievementsPanel from "../components/about/AchievementsPanel";
import GalleryPreview from "../components/about/GalleryPreview";
import AdmissionsCallout from "../components/about/AdmissionsCallout";
import CtaBanner from "../components/landing/CtaBanner";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <AboutHero />
      <IntroSection />
      <VisionMission />
      <WhyChooseUs />
      <AchievementsPanel />
      <GalleryPreview />
      <AdmissionsCallout />
      <CtaBanner />
      <Footer />
    </div>
  );
}
