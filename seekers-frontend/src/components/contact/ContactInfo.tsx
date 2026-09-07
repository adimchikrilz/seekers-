const SOCIALS = [
  { label: "Facebook", href: "#", glyph: "f" },
  { label: "Twitter / X", href: "#", glyph: "x" },
  { label: "Instagram", href: "#", glyph: "ig" },
  { label: "Prospectus (PDF)", href: "#", glyph: "pdf" },
];

export default function ContactInfo() {
  return (
    <div className="contact-info-card">
      <h3>Get in Touch</h3>
      <p className="contact-info-lede">
        Have a question about admissions, facilities, or anything else? Reach us directly, or
        send an enquiry and we&rsquo;ll get back to you.
      </p>

      <div className="contact-info-item">
        <span className="contact-info-icon">📍</span>
        <div>
          <strong>Address</strong>
          <span>Idanre Garage, Oke-Aro, Akure, Ondo State</span>
        </div>
      </div>
      <div className="contact-info-item">
        <span className="contact-info-icon">☏</span>
        <div>
          <strong>Phone</strong>
          <span>+234 903 474 7594</span>
          <span>0915 051 6337</span>
        </div>
      </div>
      <div className="contact-info-item">
        <span className="contact-info-icon">✉</span>
        <div>
          <strong>Email</strong>
          <span>seekersgroupofschools@gmail.com</span>
          <span>info@seekersschools.com</span>
        </div>
      </div>

      <div className="contact-social">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
            {s.glyph}
          </a>
        ))}
      </div>
    </div>
  );
}
