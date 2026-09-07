export default function AboutHero() {
  return (
    <section className="page-hero">
      <img
        className="page-hero-bg"
        src="https://picsum.photos/seed/seekers-about-hero/1800/900"
        alt="Seekers Group of Schools playground"
      />
      <div className="page-hero-scrim" />
      <div className="page-hero-content">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="sep">/</span>
          <span className="current">About Us</span>
        </div>
        <h1>About Us</h1>
      </div>
    </section>
  );
}
