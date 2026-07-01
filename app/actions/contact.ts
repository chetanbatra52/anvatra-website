"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const fullName = formData.get("fullName")?.toString() || "";
  const company = formData.get("company")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const requirement = formData.get("requirement")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const website = formData.get("website")?.toString() || "";

  // Required field validation
if (!fullName || !email || !requirement || !message) {
  throw new Error("Please fill in all required fields.");
}

  // Honeypot spam protection
if (website) {
  return;
}

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Website Enquiry - ${fullName}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${requirement}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

   return;
  } catch (error) {
    console.error(error);

  throw new Error("Something went wrong while sending your enquiry.");
  }
}