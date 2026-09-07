export default function AdmissionsCallout() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="admissions-callout reveal">
          <div>
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>Admissions</span>
            </div>
            <h2 style={{ fontSize: 32, color: "var(--oxblood-dark)", margin: "0 0 14px" }}>
              Admissions open annually.
            </h2>
            <p>
              Enrolment typically opens mid-year, ahead of the new academic session — reach out
              to our admissions team for exact dates and requirements for the current intake.
            </p>
          </div>
          <a href="#" className="btn-primary">
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
