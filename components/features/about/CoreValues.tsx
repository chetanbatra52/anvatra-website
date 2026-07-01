import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import ValueCard from "./ValueCard";

import { aboutPageContent } from "@/lib/constants/about";

export default function CoreValues() {
  const { coreValues } = aboutPageContent;

  return (
    <Section className="pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow="Our Values"
            title="Principles that Shape Every Partnership"
            description="Our values define how we collaborate, solve problems, and deliver technology solutions. They guide every decision—from hiring exceptional talent to building lasting client relationships."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}