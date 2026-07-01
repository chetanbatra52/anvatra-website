import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function WhyChoose() {
  return (
    <Section className="bg-slate-50">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <Heading
            as="h2"
            title="Why Choose ANVATRA?"
            description="We combine deep technical expertise with a people-first approach to help organizations build exceptional engineering teams."
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}