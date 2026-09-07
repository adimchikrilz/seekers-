export default function IntroSection() {
  return (
    <section className="section" id="intro">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media reveal reveal-left">
            <img
              src="https://picsum.photos/seed/seekers-about-building/640/800"
              alt="Seekers Group of Schools building"
            />
            <div className="stat-pill">
              <strong>Est. Akure</strong>
              <span>Ondo State, Nigeria</span>
            </div>
          </div>
          <div className="about-copy reveal reveal-right">
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>About Seekers Group of Schools</span>
            </div>
            <h2 style={{ fontSize: 36, color: "var(--oxblood-dark)", margin: "0 0 20px" }}>
              We are Seekers Group of Schools.
            </h2>
            <p>
              Seekers Group of Schools is a Christian private educational institution
              accredited by the Ondo State Ministry of Education. Located at Idanre Garage,
              Oke-Aro, Akure, Ondo State, we are committed to providing quality education that
              nurtures academic excellence, godly character, leadership, and lifelong learning.
            </p>
            <p>
              At Seekers, we believe that education goes beyond the acquisition of knowledge.
              We are dedicated to building a solid foundation that prepares children to become
              responsible citizens, innovative thinkers, and future leaders. Through a
              supportive and values-driven learning environment, we equip our learners with the
              skills, confidence, and character required to excel in an ever-changing world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
