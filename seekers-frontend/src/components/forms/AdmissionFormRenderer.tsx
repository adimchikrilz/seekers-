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
  submitLabel = "Submit Application",
}: AdmissionFormRendererProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const isLastStep = step === sections.length - 1;
  const currentSection = sections[step];

  const handleChange = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const handleReset = () => {
    setValues({});
    setStep(0);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Only the fields on the CURRENT step are in the DOM, so this native
    // validation only checks what's visible on screen right now.
    if (isLastStep) {
      // No backend is wired up yet — see src/api/client.ts for the fetch
      // wrapper this should eventually POST to (guarded by VITE_USE_MOCKS).
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((s) => Math.max(0, s - 1));
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
          <button className="btn-primary" onClick={() => { setSubmitted(false); handleReset(); }}>
            Fill Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap">
      <div className="admission-form reveal visible">
        {intro && <p className="form-intro">{intro}</p>}
        <p className="form-note">Note: fields marked with an asterisk (*) are required.</p>

        <div className="form-progress">
          {sections.map((section, i) => (
            <div
              className={`form-progress-step${i === step ? " active" : ""}${
                i < step ? " done" : ""
              }`}
              key={section.title}
            >
              <span className="form-progress-dot">{i < step ? "✓" : i + 1}</span>
              <span className="form-progress-label">{section.title}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="form-section">
            <h3>{currentSection.title}</h3>
            {currentSection.note && <p className="form-section-note">{currentSection.note}</p>}
            <div className="form-grid">
              {currentSection.fields.map((field) => (
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

          <div className="form-actions">
            {step > 0 && (
              <button type="button" className="btn-reset" onClick={handleBack}>
                Back
              </button>
            )}
            <button type="submit" className="btn-submit">
              {isLastStep ? submitLabel : "Continue"}
            </button>
            <button type="button" className="btn-text-reset" onClick={handleReset}>
              Reset form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}