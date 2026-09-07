import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroSimpleProps {
  title: string;
  breadcrumb: Crumb[];
}

export default function PageHeroSimple({ title, breadcrumb }: PageHeroSimpleProps) {
  return (
    <section className="page-hero-simple">
      <div className="wrap">
        <div className="breadcrumb">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {i > 0 && <span className="sep">/</span>}
              {crumb.href ? (
                <Link to={crumb.href}>{crumb.label}</Link>
              ) : (
                <span className="current">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
