export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "select"
  | "textarea"
  | "radio"
  | "file";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
  accept?: string;
  step?: string;
}

export interface FormSectionConfig {
  title: string;
  note?: string;
  fields: FormField[];
}
