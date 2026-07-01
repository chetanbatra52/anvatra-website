import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions | ANVATRA",
  description:
    "Read the Terms & Conditions governing the use of the ANVATRA website and services.",
};

export default function TermsPage() {
  return (
    <Section className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Heading
            eyebrow="Legal"
            title="Terms & Conditions"
            description="Last Updated: July 2026"
            as="h1"
          />

          <div className="mt-12 space-y-10 leading-8 text-slate-600">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Acceptance of Terms
              </h2>

              <p>
                By accessing or using the ANVATRA website, you agree to these
                Terms & Conditions. If you do not agree, please discontinue use
                of the website.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Website Purpose
              </h2>

              <p>
                ANVATRA provides information regarding technology recruitment
                and related professional services. The website content is
                intended for informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Intellectual Property
              </h2>

              <p>
                All content, branding, logos, graphics, and text on this website
                are the property of ANVATRA unless otherwise stated. They may
                not be copied, reproduced, or distributed without written
                permission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                User Responsibilities
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Provide accurate information when submitting inquiries.</li>
                <li>Do not misuse or attempt to disrupt the website.</li>
                <li>Do not submit unlawful or misleading information.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Limitation of Liability
              </h2>

              <p>
                While we strive to keep the information on this website accurate
                and current, ANVATRA makes no guarantees regarding its
                completeness or accuracy and shall not be liable for any direct
                or indirect losses arising from its use.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Changes to These Terms
              </h2>

              <p>
                We may update these Terms & Conditions from time to time. Any
                changes will be published on this page with the revised update
                date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Contact
              </h2>

              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact us at:
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