import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import CtaBanner from "../components/landing/CtaBanner";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    title: "Pick up the form",
    body: "Choose e-Admission or e-Admission 2 below and fill in your child's details online — no paper forms needed.",
  },
  {
    title: "Upload documents",
    body: "Attach a recent passport photograph, and — for e-Admission 2 — a merged PDF/Word file of supporting documents.",
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
              Choose one of the application forms below to get started — e-Admission for a
              standard application, or e-Admission 2 if you'd like to include a merged document
              upload alongside state and local government details.
            </p>
          </div>

          <div className="admission-choice-grid">
            <div className="admission-choice-card reveal reveal-left">
              <span className="fac-index">Standard</span>
              <h3>e-Admission</h3>
              <p>
                The core application form — personal details, medical record, and parent or
                guardian information.
              </p>
              <Link to="/admissions/e-admission" className="btn-primary">
                Start e-Admission
              </Link>
            </div>
            <div className="admission-choice-card reveal reveal-right">
              <span className="fac-index">Extended</span>
              <h3>e-Admission 2</h3>
              <p>
                Everything in the standard form, plus state / local government details and a
                combined document upload (PDF or Word, up to 5MB).
              </p>
              <Link to="/admissions/e-admission-2" className="btn-primary">
                Start e-Admission 2
              </Link>
            </div>
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
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
