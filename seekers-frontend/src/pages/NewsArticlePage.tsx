import { useEffect, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import ArticleBlocks from "../components/news/ArticleBlocks";
import NewsCard from "../components/news/NewsCard";
import { NEWS_ARTICLES, getArticleBySlug } from "../components/news/newsData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title={article.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <div className="article-layout reveal">
            <div className="article-media">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-meta">
              <span className="news-card-tag static">{article.category}</span>
              <span className="news-card-date">{article.date}</span>
            </div>

            <ArticleBlocks blocks={article.blocks} />

            {article.cta && (
              <Link to={article.cta.href} className="btn-primary" style={{ marginTop: 8 }}>
                {article.cta.label}
              </Link>
            )}

            <div className="article-back">
              <Link to="/news">← Back to all news</Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="hero-eyebrow">
                <span className="rule" style={{ background: "var(--oxblood)" }} />
                <span style={{ color: "var(--moss)" }}>More News</span>
              </div>
              <h2>You might also want to read.</h2>
            </div>
            <div className="news-full-grid">
              {related.map((a) => (
                <NewsCard article={a} key={a.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
