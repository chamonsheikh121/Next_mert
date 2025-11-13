// import z from "zod"


// const objectId = z
//   .string()
//   .regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId (expect 24 hex chars)");

// // const specificationSchema = z.object({
// //   processor: z.string().min(1),
// //   ram: z.string().min(1),
// //   storage: z.string().min(1),
// //   display: z.string().min(1),
// // });


// export const createProductValidationSchema = z.object({
//    name: z.string().min(1, "Name is required"),
//   description: z.string().min(1, "Description is required"),
//   price: z
//     .number().min(1,"Price is required")
//     .int("Price must be an integer")
//     .positive("Price must be greater than 0"),
//   stock: z
//     .number().min(1,"stock is required")
//     .int("Stock must be an integer")
//     .nonnegative("Stock cannot be negative"),

// }
// )