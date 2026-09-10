import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeroSimple from "../components/layout/PageHeroSimple";
import AdmissionFormRenderer from "../components/forms/AdmissionFormRenderer";
import {
  personalInfoSection,
  medicalRecordSection,
  parentsInfoSection,
  guardianInfoSection,
} from "../components/forms/fieldConfigs";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SECTIONS = [
  personalInfoSection,
  medicalRecordSection,
  parentsInfoSection,
  guardianInfoSection,
];

export default function EAdmissionPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title="e-Admission"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "e-Admission" },
        ]}
      />
      <section className="section">
        <AdmissionFormRenderer
          title="e-Admission"
          intro="Complete the form below to apply for admission into Seekers Group of Schools. It's split into four short steps, so you can take it one part at a time."
          sections={SECTIONS}
        />
      </section>
      <Footer />
    </div>
  );
}