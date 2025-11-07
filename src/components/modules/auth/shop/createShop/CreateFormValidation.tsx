import { z } from "zod";

const currentYear = new Date().getFullYear();
const businessLicenseRegex = /^[A-Z0-9-_]{5,}$/i;
const phoneRegex = /^[+\d][\d\s().-]{6,}$/;
const taxIdRegex = /^[A-Z0-9-_]{3,}$/i;

export const createShopSchema = z.object({
  shopName: z
    .string()
    .min(2, { message: "Shop name must be at least 2 characters." })
    .max(150, { message: "Shop name is too long." })
    .transform((s) => s.trim()),

  businessLicenseNumber: z
    .string()
    .min(3, { message: "Business license number is required." })
    .regex(businessLicenseRegex, {
      message:
        "Business license must contain letters, numbers and may include - or _",
    })
    .transform((s) => s.trim()),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." })
    .max(500)
    .transform((s) => s.trim()),

  contactNumber: z
    .string()
    .min(7, { message: "Contact number seems too short." })
    .regex(phoneRegex, { message: "Invalid contact number format." })
    .transform((s) => s.trim()),

  website: z
    .string()
    .url({ message: "Website must be a valid URL (including http/https)." })
    .optional()
    .nullable()
    .transform((v) => (v ? v.trim() : v)),

  servicesOffered: z
    .array(
      z
        .string()
        .min(1)
        .transform((s) => s.trim())
    )
    .min(1, { message: "At least one service must be provided." }),

establishedYear: z
  .string()
  .refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 1800 && num <= currentYear;
  }, { message: `Established year must be between 1800 and ${currentYear}.` }),


  socialMediaLinks: z
    .object({
      facebook: z.string().url().optional().nullable(),
      twitter: z.string().url().optional().nullable(),
      instagram: z.string().url().optional().nullable(),
    })
    .optional()
    .default({}),

  taxIdentificationNumber: z
    .string()
    .optional()
    .nullable()
    .refine(
      (v) => (v === null || v === undefined ? true : taxIdRegex.test(v)),
      {
        message: "Tax identification number format is invalid.",
      }
    )
    .transform((v) => (typeof v === "string" ? v.trim() : v)),
});
