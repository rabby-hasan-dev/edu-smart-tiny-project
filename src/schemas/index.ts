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
