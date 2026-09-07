import { useState } from "react";
import type { FormEvent } from "react";

const MAX_MESSAGE_LENGTH = 250;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const remaining = MAX_MESSAGE_LENGTH - message.length;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired up yet — see src/api/client.ts for where this
    // should eventually POST to (guarded by VITE_USE_MOCKS).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h2>Enquiry sent.</h2>
        <p>
          Thanks for reaching out, {name || "there"} — this is a demo form, so nothing has
          actually been sent yet. Wire it up to <code>src/api/client.ts</code> when a real
          endpoint is ready.
        </p>
        <button className="btn-primary" onClick={() => setSubmitted(false)}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-name">
          Name<span className="req-mark"> *</span>
        </label>
        <input
          id="contact-name"
          name="name"
          className="form-input"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-email">
          Email<span className="req-mark"> *</span>
        </label>
        <input
          id="contact-email"
          name="email"
          className="form-input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-phone">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          className="form-input"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-message">
          Message<span className="req-mark"> *</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-input form-textarea"
          rows={5}
          required
          maxLength={MAX_MESSAGE_LENGTH}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="char-counter">Characters remaining: {remaining}</span>
      </div>

      <button type="submit" className="btn-submit" style={{ marginTop: 8 }}>
        Submit Enquiry
      </button>
    </form>
  );
}
