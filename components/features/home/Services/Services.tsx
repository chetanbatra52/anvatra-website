import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            as="h2"
            title="Technology Services"
            description="Helping organizations build, scale, and modernize technology capabilities across Data, AI, Azure, Cloud, and Analytics."
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}