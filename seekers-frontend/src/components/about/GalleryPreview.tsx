const IMAGES = [
  { src: "https://picsum.photos/seed/seekers-gal-1/500/500", alt: "Seekers front view" },
  { src: "https://picsum.photos/seed/seekers-gal-2/500/500", alt: "Classroom session" },
  { src: "https://picsum.photos/seed/seekers-gal-3/500/500", alt: "Admissions banner" },
  { src: "https://picsum.photos/seed/seekers-gal-4/500/500", alt: "Classroom interior" },
  { src: "https://picsum.photos/seed/seekers-gal-5/500/500", alt: "Playground" },
  { src: "https://picsum.photos/seed/seekers-gal-6/500/500", alt: "Dining hall" },
];

export default function GalleryPreview() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="hero-eyebrow">
            <span className="rule" style={{ background: "var(--oxblood)" }} />
            <span style={{ color: "var(--moss)" }}>Gallery</span>
          </div>
          <h2>A glimpse into life at Seekers.</h2>
        </div>
        <div className="gallery-grid reveal">
          {IMAGES.map((img) => (
            <div className="gallery-item" key={img.src}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
