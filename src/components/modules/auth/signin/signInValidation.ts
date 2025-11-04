import { z } from "zod";


export const signInSchema = z
  .object({
   
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Invalid email address." })
      .transform((s) => s.trim().toLowerCase()),

    password: z
      .string()
      .min(1,{ message: "Password must be valid" })

  })
