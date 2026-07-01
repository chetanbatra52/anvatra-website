import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import PromiseCard from "./PromiseCard";

import { aboutPageContent } from "@/lib/constants/about";

export default function OurPromise() {
  const { promise } = aboutPageContent;

  return (
    <Section className="bg-slate-50 pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={promise.badge}
            title={promise.title}
            description={promise.description}
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {promise.commitments.map((item) => (
            <PromiseCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}