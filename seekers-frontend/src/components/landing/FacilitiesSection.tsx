import type { Facility } from "../../types/landing";

const FACILITIES: Facility[] = [
  {
    index: "Music Room",
    title: "A room where rhythm is a first language.",
    body: "Student-friendly drums, xylophones and keyboards give every child a hands-on way into music — nurturing a love for sound long before it's taught as a subject.",
    image: "https://picsum.photos/seed/seekers-music-room2/700/500",
    imageAlt: "Music Room",
  },
  {
    index: "Library",
    title: "A cosy corner built for reading, not just storing books.",
    body: "Colourful storybooks, picture books and phonics materials sit alongside soft seating, building a strong reading foundation in a fun, unhurried space.",
    image: "https://picsum.photos/seed/seekers-library2b/700/500",
    imageAlt: "Library",
    reverse: true,
    blob: true,
  },
  {
    index: "Safe Play Area",
    title: "Outdoor play, without the worry.",
    body: "Slides, swings and soft flooring encourage physical activity, social interaction and creativity — because play is part of how children learn, too.",
    image: "https://picsum.photos/seed/seekers-playground2/700/500",
    imageAlt: "Safe Play Area",
  },
  {
    index: "Medical & Wellness Room",
    title: "A trained caregiver, close by, every single day.",
    body: "A dedicated health and wellness room provides first aid and looks after every child's wellbeing while they're in our care — alongside child-friendly, easily accessible restrooms.",
    image: "https://picsum.photos/seed/seekers-wellness2/700/500",
    imageAlt: "Medical & Wellness Room",
    reverse: true,
    blob: true,
  },
];

export default function FacilitiesSection() {
  return (
    <section className="section section-alt" id="facilities">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="hero-eyebrow">
            <span className="rule" style={{ background: "var(--oxblood)" }} />
            <span style={{ color: "var(--moss)" }}>Top Facilities</span>
          </div>
          <h2>Spaces built around how children actually grow.</h2>
          <p>
            From the first note played in the music room to the last page turned in the
            library, every corner of Seekers is designed with a child&rsquo;s curiosity in mind.
          </p>
        </div>

        {FACILITIES.map((facility) => (
          <div
            className={`facility-row reveal${facility.reverse ? " reverse" : ""}`}
            key={facility.index}
          >
            <div className={`fac-media${facility.blob ? " blob" : ""}`}>
              <img src={facility.image} alt={facility.imageAlt} />
            </div>
            <div className="fac-copy">
              <span className="fac-index">{facility.index}</span>
              <h3>{facility.title}</h3>
              <p>{facility.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
