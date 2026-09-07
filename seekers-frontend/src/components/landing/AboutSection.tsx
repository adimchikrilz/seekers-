const PILLARS = [
  {
    title: "Academic Excellence",
    body: "A curriculum that stretches every learner, from nursery through to senior secondary.",
  },
  {
    title: "Godly Character",
    body: "Faith woven naturally into daily life, not confined to a single class.",
  },
  {
    title: "Lifelong Learning",
    body: "Curiosity nurtured as a habit, not a phase — through music, books, and play.",
  },
];

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-media reveal reveal-left">
            <img
              src="https://picsum.photos/seed/seekers-about2/640/800"
              alt="Students at Seekers Group of Schools"
            />
            <div className="stat-pill">
              <strong>Nursery — SS3</strong>
              <span>full academic pathway</span>
            </div>
          </div>
          <div className="about-copy reveal reveal-right">
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>About Seekers</span>
            </div>
            <h2 style={{ fontSize: 36, color: "var(--oxblood-dark)", margin: "0 0 20px" }}>
              A home for learning, long before it&rsquo;s a classroom.
            </h2>
            <p>
              Seekers Group of Schools is a Christian private educational institution located at
              Idanre Garage, Oke-Aro, Akure. We believe education goes beyond acquiring
              knowledge — it&rsquo;s about building a solid foundation for life.
            </p>
            <p>
              Every child who walks through our gate is known by name, encouraged in their
              gifts, and prepared to become a responsible, godly citizen ready for the world
              ahead.
            </p>
            <div className="pillars">
              {PILLARS.map((pillar) => (
                <div className="pillar reveal" key={pillar.title}>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
