const REASONS = [
  "One of the pioneering schools in Akure to introduce a Virtual Learning System.",
  "Integration of both Nigerian and International curricula.",
  "Strong ICT, Computer Education, and E-Learning programmes.",
  "Students develop digital literacy skills, including coding, educational technology, and computer-based examinations.",
  "Comprehensive sports, debate, and extracurricular activities that promote creativity, confidence, and teamwork.",
  "Guidance and counselling programmes covering career development, anti-bullying education, mental health awareness, and personal development.",
  "Community service initiatives such as sanitation drives, tree planting, recycling campaigns, and charity outreach programmes that instill social responsibility and good citizenship.",
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="hero-eyebrow">
            <span className="rule" style={{ background: "var(--oxblood)" }} />
            <span style={{ color: "var(--moss)" }}>Why Choose Us</span>
          </div>
          <h2>Why choose Seekers Group of Schools?</h2>
        </div>
        <div className="why-list">
          {REASONS.map((reason, i) => (
            <div className="why-item reveal" key={i}>
              <span className="why-check">✓</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
