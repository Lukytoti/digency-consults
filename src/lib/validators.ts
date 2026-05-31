import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(160).optional().or(z.literal("")),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().min(10, "Tell me a bit more about your project").max(4000),
  source: z.string().max(80).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  source: z.string().max(80).optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
