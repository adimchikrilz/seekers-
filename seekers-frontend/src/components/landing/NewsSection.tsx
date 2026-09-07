import { Link } from "react-router-dom";

export default function NewsSection() {
  return (
    <section className="section" id="news">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="hero-eyebrow">
            <span className="rule" style={{ background: "var(--oxblood)" }} />
            <span style={{ color: "var(--moss)" }}>Latest News</span>
          </div>
          <h2>See what&rsquo;s happening around us.</h2>
        </div>
        <div className="news-grid">
          <Link
            to="/news/two-students-shine-akure-south-mock"
            className="news-feature reveal reveal-left"
          >
            <div className="news-tag">Academic Achievement</div>
            <h3>Two students shine as overall best in Akure South Mock</h3>
            <p>
              Ajayi Adedoyin emerged as the Overall Best Student in the recently concluded Akure
              South Mock Examination, while Abiona Samuel secured an impressive 4th overall
              position.
            </p>
            <span
              className="read-more"
              style={{ color: "var(--brass)", borderBottomColor: "var(--brass)" }}
            >
              Read the full story
            </span>
          </Link>
          <div className="news-side">
            <Link to="/news/admissions-open-2026-2027" className="news-card reveal reveal-right">
              <div>
                <h4>Admissions now open for 2026/2027</h4>
                <p>
                  Seekers Comprehensive High School invites prospective students into JSS1
                  through SS2 for the new academic session.
                </p>
              </div>
              <span className="read-more">Learn more</span>
            </Link>
            <Link to="/news/mission-and-vision-statement" className="news-card reveal reveal-right">
              <div>
                <h4>Mission &amp; Vision Statement</h4>
                <p>
                  Our unified institutional statement for both the Primary (SNPS) and Secondary
                  (SCHS) sections.
                </p>
              </div>
              <span className="read-more">Learn more</span>
            </Link>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link to="/news" className="btn-secondary" style={{ borderColor: "var(--oxblood)", color: "var(--oxblood-dark)" }}>
            See All News
          </Link>
        </div>
      </div>
    </section>
  );
}
