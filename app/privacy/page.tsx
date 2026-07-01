import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | ANVATRA",
  description:
    "Learn how ANVATRA collects, uses, and protects your information when you interact with our website.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading
            eyebrow="Legal"
            title="Privacy Policy"
            description="Last Updated: July 2026"
            as="h1"
          />

          <div className="mt-12 space-y-10 text-slate-600 leading-8">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Introduction
              </h2>

              <p>
                ANVATRA ("we", "our", or "us") values your privacy. This Privacy
                Policy explains how we collect, use, and protect the information
                you provide when using our website and contacting us regarding
                technology recruitment services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Information We Collect
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Business Email Address</li>
                <li>Phone Number</li>
                <li>Hiring Requirements or Inquiry Details</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                How We Use Your Information
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to your inquiries.</li>
                <li>Understand your hiring requirements.</li>
                <li>Provide recruitment-related services.</li>
                <li>Improve our website and customer experience.</li>
                <li>Communicate regarding business opportunities.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Information Security
              </h2>

              <p>
                We take reasonable administrative and technical measures to
                protect the information you provide against unauthorized access,
                disclosure, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Third-Party Services
              </h2>

              <p>
                We use trusted service providers to operate our website and
                process communications, including secure email delivery
                providers. These providers only process information necessary to
                perform their services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Your Rights
              </h2>

              <p>
                You may request access to, correction of, or deletion of your
                personal information by contacting us using the email address
                below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Contact Us
              </h2>

              <p>
                If you have any questions regarding this Privacy Policy, please
                contact us at:
              </p>

              <p className="mt-4 font-semibold text-slate-900">
                contact@anvatra.com
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}