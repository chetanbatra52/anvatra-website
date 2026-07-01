import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import ContactOptionCard from "./ContactOptionCard";

import { contactPageContent } from "@/lib/constants/contact";

export default function ContactOptions() {
  const { contactOptions } = contactPageContent;

  return (
    <Section className="pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow="Get in Touch"
            title="Choose the Way That Works Best for You"
            description="Whether you prefer email, a phone conversation, or simply want to know where we're based, we're ready to connect."
            align="center"
            className="mt-4"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => (
            <ContactOptionCard
              key={option.title}
              icon={option.icon}
              title={option.title}
              value={option.value}
              description={option.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}