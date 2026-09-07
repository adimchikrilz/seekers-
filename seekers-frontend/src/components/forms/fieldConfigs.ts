import type { FormSectionConfig } from "./types";
import {
  COUNTRIES,
  NIGERIAN_STATES,
  CLASS_OPTIONS,
  RATING_OPTIONS,
  GENOTYPE_OPTIONS,
  BLOOD_GROUP_OPTIONS,
} from "./formData";

/** Personal Information section. Pass `includeStateLga` for the e-Admission 2 variant. */
export function personalInfoSection(includeStateLga: boolean): FormSectionConfig {
  return {
    title: "Personal Information",
    fields: [
      { name: "surname", label: "Surname", type: "text", required: true },
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "middleName", label: "Middle Name", type: "text" },
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        required: true,
        options: ["Male", "Female"],
      },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      {
        name: "nationality",
        label: "Nationality",
        type: "select",
        required: true,
        options: COUNTRIES,
      },
      ...(includeStateLga
        ? ([
            {
              name: "state",
              label: "State",
              type: "select",
              required: true,
              options: NIGERIAN_STATES,
            },
            {
              name: "lga",
              label: "Local Government Area / City",
              type: "text",
              required: true,
            },
          ] as const)
        : []),
      { name: "height", label: "Height (m)", type: "number", required: true, step: "0.01" },
      { name: "weight", label: "Body Weight (kg)", type: "number", required: true },
      { name: "familySize", label: "Family Size", type: "number" },
      { name: "positionInFamily", label: "Position in Family", type: "text" },
      { name: "lastSchool", label: "Name of Last School Attended", type: "text" },
      {
        name: "reasonForLeaving",
        label: "Reason for Leaving Last School Attended",
        type: "textarea",
      },
      {
        name: "classSought",
        label: "Class to Which Admission is Sought",
        type: "select",
        required: true,
        options: CLASS_OPTIONS,
      },
      {
        name: "passport",
        label: "Passport Photograph",
        type: "file",
        required: true,
        accept: "image/*",
        help: "Image file must not exceed 1MB.",
      },
    ],
  };
}

export const medicalRecordSection: FormSectionConfig = {
  title: "Medical Record",
  fields: [
    { name: "vision", label: "Vision", type: "select", required: true, options: RATING_OPTIONS },
    { name: "hearing", label: "Hearing", type: "select", required: true, options: RATING_OPTIONS },
    { name: "speech", label: "Speech", type: "select", required: true, options: RATING_OPTIONS },
    {
      name: "generalVitality",
      label: "General Vitality",
      type: "select",
      required: true,
      options: RATING_OPTIONS,
    },
    {
      name: "disability",
      label: "Disability",
      type: "text",
      required: true,
      placeholder: "State 'None' if not applicable",
    },
    { name: "genotype", label: "Genotype", type: "select", options: GENOTYPE_OPTIONS },
    { name: "bloodGroup", label: "Blood Group", type: "select", options: BLOOD_GROUP_OPTIONS },
    { name: "otherMedical", label: "Other Medical Information", type: "textarea" },
  ],
};

function parentFields(role: "Father" | "Mother") {
  const p = role.toLowerCase();
  return [
    { name: `${p}Name`, label: `${role}'s Name`, type: "text" as const },
    { name: `${p}Occupation`, label: `${role}'s Occupation`, type: "text" as const },
    { name: `${p}OfficeAddress`, label: `${role}'s Office Address`, type: "textarea" as const },
    { name: `${p}HomeAddress`, label: `${role}'s Home Address`, type: "textarea" as const },
    { name: `${p}Phone`, label: `${role}'s Phone Number(s)`, type: "tel" as const },
    { name: `${p}Email`, label: `${role}'s Email Address`, type: "email" as const },
  ];
}

export const parentsInfoSection: FormSectionConfig = {
  title: "Parent's Information",
  note: "One of the parent's information (either father or mother) must be completed.",
  fields: [...parentFields("Father"), ...parentFields("Mother")],
};

export const guardianInfoSection: FormSectionConfig = {
  title: "Guardian's Information",
  fields: [
    { name: "guardianName", label: "Guardian's Name", type: "text" },
    { name: "guardianOccupation", label: "Guardian's Occupation", type: "text" },
    { name: "guardianOfficeAddress", label: "Guardian's Office Address", type: "textarea" },
    { name: "guardianHomeAddress", label: "Guardian's Home Address", type: "textarea" },
    { name: "guardianPhone", label: "Guardian's Phone Number(s)", type: "tel" },
    { name: "guardianEmail", label: "Guardian's Email Address", type: "email" },
  ],
};

export const admissionDocumentSection: FormSectionConfig = {
  title: "Admission Document",
  fields: [
    {
      name: "mergedDocument",
      label: "Merge all documents into a single file",
      type: "file",
      accept: ".pdf,.doc,.docx",
      help: "File must not exceed 5MB. Word/PDF file types only.",
    },
  ],
};
