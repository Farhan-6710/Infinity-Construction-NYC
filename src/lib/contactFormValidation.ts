import { z } from "zod";

// Define the Zod schema for form data validation
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"), // Ensure name is not empty
  email: z.string().email("Invalid email address").min(1, "Email is required"), // Validate email format
  message: z.string().min(1, "Message is required"), // Ensure message is not empty
});
