import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title="Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal reveal-left">
              <ContactInfo />
              <div className="map-placeholder">
                <img
                  src="https://picsum.photos/seed/seekers-map/700/460"
                  alt="Map showing Seekers Group of Schools location"
                />
                <div className="map-pin">📍</div>
                <span className="map-caption">Oke-Aro, Akure, Ondo State</span>
              </div>
            </div>
            <div className="contact-form-card reveal reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
