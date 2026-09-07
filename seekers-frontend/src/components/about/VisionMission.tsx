const CARDS = [
  {
    label: "Vision",
    body: "To provide a solid foundation for young learners who aspire to become great leaders of tomorrow.",
  },
  {
    label: "Mission",
    body: "To catch them young and set their feet on the path of academic excellence through education of international standards.",
  },
];

export default function VisionMission() {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="vm-grid">
          {CARDS.map((card, i) => (
            <div className={`vm-card reveal${i === 1 ? " reveal-right" : " reveal-left"}`} key={card.label}>
              <span className="vm-label">{card.label}</span>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
