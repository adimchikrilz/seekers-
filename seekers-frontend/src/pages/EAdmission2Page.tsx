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
  admissionDocumentSection,
} from "../components/forms/fieldConfigs";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function EAdmission2Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const sections = [
    personalInfoSection(true),
    medicalRecordSection,
    parentsInfoSection,
    guardianInfoSection,
    admissionDocumentSection,
  ];

  return (
    <div ref={rootRef}>
      <Navbar />
      <PageHeroSimple
        title="e-Admission 2"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "e-Admission 2" },
        ]}
      />
      <section className="section">
        <AdmissionFormRenderer
          title="e-Admission 2"
          intro="An extended version of the admission form, including state/LGA details and a combined document upload."
          sections={sections}
        />
      </section>
      <Footer />
    </div>
  );
}
