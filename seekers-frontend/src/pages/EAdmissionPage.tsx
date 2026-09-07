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

export default function EAdmissionPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const sections = [
    personalInfoSection(false),
    medicalRecordSection,
    parentsInfoSection,
    guardianInfoSection,
  ];

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
          intro="Complete the form below to apply for admission into Seekers Group of Schools."
          sections={sections}
        />
      </section>
      <Footer />
    </div>
  );
}
