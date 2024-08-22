'use client'

import { contact } from "@/actions/contact";
import { ContactFormSchema } from "@/lib/schemas";

export default function ContactForm() {
  const clientAction = async (formData) => {
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    const result = ContactFormSchema.safeParse(contactData);
    if (!result.success) {
      console.log(result.error.issues);
      return;
    }

    await contact(result.data);
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 flex-grow">
      <div className="mx-auto max-w-md flex-1">
        <h2 className="text-3xl font-bold tracking-tight text-[#0077b6]">Get in Touch</h2>
        <p className="mt-4 text-lg text-[#333]">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as
          possible.
        </p>
        <form action={clientAction} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#0077b6]">
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-[#0077b6] bg-white py-3 px-4 text-[#333] shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#0077b6]">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-[#0077b6] bg-white py-3 px-4 text-[#333] shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0077b6]">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="block w-full rounded-md border-[#0077b6] bg-white py-3 px-4 text-[#333] shadow-sm focus:border-[#0077b6] focus:ring-[#0077b6]"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-[#0077b6] py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#005a8c] focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
