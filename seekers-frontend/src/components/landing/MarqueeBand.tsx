import { Fragment } from "react";

const ITEMS = [
  "Accredited by Ondo State Ministry of Education",
  "Registered with NECO & WAEC",
  "JAMB-approved examination centre",
  "Admissions open — 2026/2027 session",
];

export default function MarqueeBand() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {ITEMS.map((item) => (
              <span key={`${dup}-${item}`}>{item}</span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
