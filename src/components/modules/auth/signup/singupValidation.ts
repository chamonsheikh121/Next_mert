import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(100, { message: "Name is too long." })
      // optional: allow letters, spaces, hyphen, apostrophe
      .regex(/^[\p{L}\s'-]+$/u, {
        message: "Name may contain only letters, spaces, hyphens or apostrophes.",
      })
      .transform((s) => s.trim()),

    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Invalid email address." })
      .transform((s) => s.trim().toLowerCase()),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(passwordRegex, {
        message:
          "Password must include uppercase, lowercase, number and special character.",
      }),

    confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
  })
//   .superRefine((data, ctx) => {
//     if (data.password !== data.confirmPassword) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: ["confirmPassword"],
//         message: "Passwords do not match.",
//       });
//     }
//   });

// export type RegisterInput = z.infer<typeof signUpSchema>;
