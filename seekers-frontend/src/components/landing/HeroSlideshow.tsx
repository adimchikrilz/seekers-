import { useSlideshow } from "../../hooks/useSlideshow";
import type { Slide } from "../../types/landing";

const SLIDES: Slide[] = [
  {
    src: "https://picsum.photos/seed/seekers-front2/1600/1000",
    alt: "School front view",
    caption: "Seekers Front View",
  },
  {
    src: "https://picsum.photos/seed/seekers-music2/1600/1000",
    alt: "Music room",
    caption: "Music Room",
  },
  {
    src: "https://picsum.photos/seed/seekers-library2/1600/1000",
    alt: "Library",
    caption: "Library",
  },
  {
    src: "https://picsum.photos/seed/seekers-play2/1600/1000",
    alt: "Playground",
    caption: "Safe Play Area",
  },
];

export default function HeroSlideshow() {
  const { current, goToSlide, moveSlide } = useSlideshow(SLIDES);

  return (
    <section className="hero" id="heroSlideshow">
      {SLIDES.map((slide, i) => (
        <div className={`slide${i === current ? " active" : ""}`} key={slide.caption}>
          <img
            // remounting the active image restarts the CSS Ken Burns animation each time it activates
            key={`${slide.caption}-${i === current ? current : "idle"}`}
            src={slide.src}
            alt={slide.alt}
          />
        </div>
      ))}
      <div className="hero-scrim" />

      <div className="hero-content">
        <div className="hero-eyebrow fade-up">
          <span className="rule" />
          <span>Oke-Aro, Akure, Ondo State</span>
        </div>
        <h1 className="fade-up d1">
          Where wonder
          <br />
          becomes <em>learning.</em>
        </h1>
        <p className="lede fade-up d2">
          A Christian nursery, primary and secondary school building godly character and
          academic excellence, one curious child at a time.
        </p>
        <div className="hero-ctas fade-up d2">
          <a href="#" className="btn-primary">
            Apply for Admission
          </a>
          <a href="#facilities" className="btn-ghost">
            See our facilities
          </a>
        </div>
      </div>

      <button className="hero-arrow prev" onClick={() => moveSlide(-1)} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero-arrow next" onClick={() => moveSlide(1)} aria-label="Next slide">
        ›
      </button>

      <div className="hero-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.caption}
            className={i === current ? "active" : ""}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-caption">
        {String(current + 1).padStart(2, "0")} — {SLIDES[current].caption}
      </div>
    </section>
  );
}
