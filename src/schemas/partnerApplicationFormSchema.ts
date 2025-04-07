import { z } from "zod";

export const partnerApplicationFormSchema = z.object({
  businessName: z.string().trim().min(1, "Business Name is required"),
  contactPerson: z.string().trim().min(1, "Contact Person is required"),
  businessAddress: z.string().trim().min(1, "Business Address is required"),
  phoneNumber: z.string().trim().min(1, "Phone Number is required"),
  email: z.string().trim().email("Invalid email address"),
  website: z.string().trim().url("Invalid URL").optional(),

  typeOfBusiness: z.string().trim().min(1, "Type of Business is required"),
  industryCategory: z.string().trim().min(1, "Industry/Category is required"),
  yearsInOperation: z
    .number()
    .int()
    .min(0, "Years in Operation must be a positive integer"),
  businessRegistrationNumber: z
    .string()
    .trim()
    .min(1, "Business Registration Number is required"),
  taxIdentificationNumber: z.string().trim().optional(),

  reasonForPartnership: z
    .string()
    .trim()
    .min(1, "Reason for Partnership is required"),
  servicesOrProductsOffered: z
    .string()
    .trim()
    .min(1, "Services or Products Offered is required"),
  geographicalCoverage: z
    .string()
    .trim()
    .min(1, "Geographical Coverage is required"),
  preferredCollaborationType: z
    .string()
    .trim()
    .min(1, "Preferred Collaboration Type is required"),
  previousPartnerships: z.string().trim().optional(),

  annualRevenue: z.number().optional(),
  businessLicensesOrPermits: z
    .string()
    .trim()
    .min(1, "Business Licenses or Permits is required"),
  insuranceCoverage: z.string().trim().min(1, "Insurance Coverage is required"),

  businessRegistrationCertificate: z
    .string()
    .trim()
    .min(1, "Business Registration Certificate is required"),
  taxIdentificationCertificate: z.string().trim().optional(),
  portfolioOrReferences: z.string().trim().optional(),

  declaration: z.boolean().refine((val) => val === true, {
    message: "Declaration must be agreed to proceed",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent must be agreed to proceed",
  }),
  signature: z.string().trim().min(1, "Signature is required"),
  date: z.string().trim().min(1, "Date is required"),
});
