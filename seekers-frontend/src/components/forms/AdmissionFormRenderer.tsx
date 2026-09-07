import { useState } from "react";
import type { FormEvent } from "react";
import type { FormField, FormSectionConfig } from "./types";

interface AdmissionFormRendererProps {
  title: string;
  intro?: string;
  sections: FormSectionConfig[];
  submitLabel?: string;
}

const isFullWidth = (type: FormField["type"]) =>
  type === "textarea" || type === "file" || type === "radio";

function Field({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  const common = {
    id: field.name,
    name: field.name,
    required: field.required,
  };

  switch (field.type) {
    case "textarea":
      return (
        <textarea
          {...common}
          className="form-input form-textarea"
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          rows={3}
        />
      );

    case "select":
      return (
        <select
          {...common}
          className="form-input form-select"
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          <option value="" disabled>
            Select {field.label.toLowerCase()}
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case "radio":
      return (
        <div className="radio-group">
          {field.options?.map((opt) => (
            <label className="radio-option" key={opt}>
              <input
                type="radio"
                name={field.name}
                value={opt}
                checked={value === opt}
                onChange={(e) => onChange(field.name, e.target.value)}
                required={field.required}
              />
              {opt}
            </label>
          ))}
        </div>
      );

    case "file":
      return (
        <input
          {...common}
          className="form-input form-file"
          type="file"
          accept={field.accept}
          onChange={(e) => onChange(field.name, e.target.files?.[0]?.name ?? "")}
        />
      );

    default:
      return (
        <input
          {...common}
          className="form-input"
          type={field.type}
          step={field.step}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );
  }
}

export default function AdmissionFormRenderer({
  title,
  intro,
  sections,
  submitLabel = "Submit",
}: AdmissionFormRendererProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const handleReset = () => setValues({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend is wired up yet — see src/api/client.ts for the fetch
    // wrapper this should eventually POST to (guarded by VITE_USE_MOCKS).
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="wrap">
        <div className="form-success reveal visible">
          <h2>Application received.</h2>
          <p>
            Thank you for applying to {title === "Admission" ? "Seekers Group of Schools" : title}
            . This is a demo form — no data has actually been submitted anywhere yet. Connect it
            to a real endpoint via <code>src/api/client.ts</code> when the backend is ready.
          </p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>
            Fill Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap">
      <form className="admission-form reveal visible" onSubmit={handleSubmit}>
        {intro && <p className="form-intro">{intro}</p>}
        <p className="form-note">Note: fields marked with an asterisk (*) are required.</p>

        {sections.map((section) => (
          <div className="form-section" key={section.title}>
            <h3>{section.title}</h3>
            {section.note && <p className="form-section-note">{section.note}</p>}
            <div className="form-grid">
              {section.fields.map((field) => (
                <div
                  className={`form-field${isFullWidth(field.type) ? " form-field-full" : ""}`}
                  key={field.name}
                >
                  <label className="form-label" htmlFor={field.name}>
                    {field.label}
                    {field.required && <span className="req-mark"> *</span>}
                  </label>
                  <Field
                    field={field}
                    value={values[field.name] ?? ""}
                    onChange={handleChange}
                  />
                  {field.help && <span className="form-help">{field.help}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {submitLabel}
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
