import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { submitContactForm } from "@/app/actions/contact";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  return (
    <Section className="pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading
            eyebrow="Send an Inquiry"
            title="Tell Us About Your Hiring Needs"
            description="Complete the form below and our team will get back to you as soon as possible."
            as="h2"
            align="center"
            className="mt-4"
          />

          <form
            action={submitContactForm}
            noValidate
            className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="ABC Technologies"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Business Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Inquiry Type */}
            <div className="mt-6">
              <label
                htmlFor="requirement"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Inquiry Type *
              </label>

              <select
                id="requirement"
                name="requirement"
                defaultValue=""
                required
                aria-required="true"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="permanent-hiring">
                  Permanent Hiring
                </option>

                <option value="general-inquiry">
                  General Inquiry
                </option>

                <option value="partnership">
                  Partnership Opportunity
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message *
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                autoComplete="off"
                required
                aria-required="true"
                placeholder="Tell us about your hiring requirements..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Honeypot (Spam Protection) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col items-end gap-4">
              <SubmitButton />

              <p className="text-right text-sm text-slate-500">
                We respect your privacy. Your information will only be used to
                respond to your inquiry.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}