import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import BenefitItem from "./BenefitItem";

import { servicesPageContent } from "@/lib/constants/services";

const { whyChoose } = servicesPageContent;

export default function WhyChooseServices() {
  return (
    <Section className="pt-10 pb-20 lg:pt-14 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
         <Badge className="px-10 py-5 text-base font-semibold">
  {whyChoose.badge}
</Badge>

          <Heading
            title={whyChoose.title}
            description={whyChoose.description}
            as="h2"
            align="center"
            className="mt-4"
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {whyChoose.benefits.map((benefit) => (
            <BenefitItem
              key={benefit}
              text={benefit}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}