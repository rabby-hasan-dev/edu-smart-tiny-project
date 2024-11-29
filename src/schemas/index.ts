import { z } from "zod";

export const addUniversitySchema = z.object({
    name: z.string().min(1, "University Name is required"),
    description: z.string().min(1, "Description is required"),
    address_line_1: z.string().min(1, "Address Line 1 is required"),
    address_line_2: z.string().min(1, "Address Line 2 is required"),
    code: z.string().email("Invalid email address"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(1, "Zip Code is required").regex(/^\d+$/, "Zip Code must be numeric"),
});

export type AddUniversityFormValues = z.infer<typeof addUniversitySchema>;

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});




export const registrationSchema = z.object({
    role: z.string().min(1, "Role is required"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    agree: z.boolean().refine(val => val === true, {
        message: "You must agree to the terms and conditions",
    }),
});
