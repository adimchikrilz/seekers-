const TAGS = ["Academic Excellence", "Innovation", "Discipline", "Character Development"];

export default function AchievementsPanel() {
  return (
    <section className="achievements">
      <div className="wrap achievements-inner">
        <div className="hero-eyebrow reveal">
          <span className="rule" />
          <span>Our Achievements</span>
        </div>
        <p className="achievements-lede reveal">
          Over the years, Seekers Group of Schools has built a reputation for academic
          excellence, innovation, discipline, and character development. Our commitment to
          technology-driven learning has enabled students to successfully engage in digital
          learning and assessments. Through our holistic approach to education, we continue to
          produce confident, responsible, and well-rounded learners prepared for future success.
        </p>
        <div className="tag-row reveal">
          {TAGS.map((tag) => (
            <span className="tag-pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
