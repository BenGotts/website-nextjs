'use server'

import ContactEmailTemplate from "@/emails/Contact";
import { ContactFormSchema } from "@/lib/schemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contact(formData: unknown) {
  const { data: {name, email, message} } = ContactFormSchema.safeParse(formData);
  console.log(name, email, message);
  

  try {
    const { data, error } = await resend.emails.send({
      from: 'no-reply@bengottschalk.com',
      to: process.env.SEND_TO_EMAIL,
      reply_to: email,
      subject: `Contact Form from ${name}`,
      react: ContactEmailTemplate({ name, message })
    })
    if (error) {
      console.log(error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
}