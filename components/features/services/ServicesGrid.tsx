import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import ServiceCard from "./ServiceCard";

import { servicesPageContent } from "@/lib/constants/services";
import type { Service } from "@/lib/types/service";

const { grid, services } = servicesPageContent;

export default function ServicesGrid() {
  return (
    <Section id="services-grid">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{grid.badge}</Badge>

          <Heading
            title={grid.title}
            description={grid.description}
            as="h2"
            align="center"
            className="mt-6"
          />
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
  <ServiceCard
    key={service.id}
    service={service}
  />
))}
        </div>
      </Container>
    </Section>
  );
}