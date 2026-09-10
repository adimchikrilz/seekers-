import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import CtaBanner from "../components/landing/CtaBanner";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    title: "Fill the form",
    body: "Complete the e-Admission form online — it's split into four short steps, so it only takes a few minutes at a time.",
  },
  {
    title: "Upload documents",
    body: "Attach a recent passport photograph as part of the personal information step.",
  },
  {
    title: "Submit for review",
    body: "Our admissions team reviews every application and reaches out with next steps, including entrance assessment scheduling.",
  },
  {
    title: "Confirm your place",
    body: "Once offered a place, complete registration and payment to secure enrolment for the session.",
  },
];

const REQUIREMENTS = [
  "Recent passport photograph (under 1MB)",
  "Birth certificate or age declaration",
  "Report card / testimonial from previous school (if applicable)",
  "Immunisation record",
  "Completed medical record section of the form",
];

export default function AdmissionsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title="Admissions"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>Join Seekers</span>
            </div>
            <h2>Admissions are open for the 2026/2027 session.</h2>
            <p>
              We welcome applications from Crèche through to Senior Secondary School (SS3).
              Applying online takes just a few minutes, split into four short, manageable
              steps — personal details, medical record, and parent or guardian information.
            </p>
            <Link to="/admissions/e-admission" className="btn-primary" style={{ marginTop: 22 }}>
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>How It Works</span>
            </div>
            <h2>Four simple steps.</h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <div className="step-card reveal" key={step.title}>
                <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-media reveal reveal-left">
              <img
                src="https://picsum.photos/seed/seekers-admissions/640/800"
                alt="Students at Seekers Group of Schools"
              />
            </div>
            <div className="about-copy reveal reveal-right">
              <div className="hero-eyebrow">
                <span className="rule" style={{ background: "var(--oxblood)" }} />
                <span style={{ color: "var(--moss)" }}>What You'll Need</span>
              </div>
              <h2 style={{ fontSize: 32, color: "var(--oxblood-dark)", margin: "0 0 20px" }}>
                Documents to have ready.
              </h2>
              <ul className="requirements-list">
                {REQUIREMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/admissions/e-admission" className="btn-primary" style={{ marginTop: 26 }}>
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}