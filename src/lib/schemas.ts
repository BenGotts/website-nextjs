import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string({
    required_error: "Name is required"
  }).min(1),
  email: z.string({
    required_error: "Email is required"
  }).email(),
  message: z.string({
    required_error: "Message is required"
  }).min(1),
});