import { Link } from "react-router-dom";
import type { NewsArticle } from "./types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link to={`/news/${article.slug}`} className="news-card-full reveal">
      <div className="news-card-full-media">
        <img src={article.image} alt={article.title} />
        <span className="news-card-tag">{article.category}</span>
      </div>
      <div className="news-card-full-body">
        <span className="news-card-date">{article.date}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="read-more">Read the full story</span>
      </div>
    </Link>
  );
}
