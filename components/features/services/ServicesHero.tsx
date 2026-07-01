import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { servicesPageContent } from "@/lib/constants/services";

const { hero } = servicesPageContent;

export default function ServicesHero() {
  return (
    <Section className="pt-12 pb-12 lg:pt-16 lg:pb-16">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge className="px-6 py-3 text-base font-semibold">
  {hero.badge}
</Badge>

          <Heading
            title={hero.title}
            description={hero.description}
            as="h1"
            align="center"
            className="mt-4 lg:text-5xl whitespace-pre-line"
          />

          <div className="mt-8">
            <Button href={hero.primaryButton.href}>
              {hero.primaryButton.text}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}