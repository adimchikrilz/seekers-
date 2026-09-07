import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import NewsCard from "../components/news/NewsCard";
import { NEWS_ARTICLES } from "../components/news/newsData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function NewsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title="News"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="hero-eyebrow">
              <span className="rule" style={{ background: "var(--oxblood)" }} />
              <span style={{ color: "var(--moss)" }}>Latest News</span>
            </div>
            <h2>See what&rsquo;s happening around us.</h2>
          </div>
          <div className="news-full-grid">
            {NEWS_ARTICLES.map((article) => (
              <NewsCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
