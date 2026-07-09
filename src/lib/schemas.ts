import { z } from "zod";

// Zod Schema to validate quote requests
export const quoteSchema = z.object({
  service: z.enum(["Mowing", "Pine Straw Installation", "Mulching", "Planting & Landscaping"], {
    message: "Please select a service type.",
  }),
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter a valid 10-digit phone number."),
  address: z.string().min(5, "Please enter a valid address or neighborhood."),
});

// Infer the type from the schema for our components to use
export type QuoteFormData = z.infer<typeof quoteSchema>;
