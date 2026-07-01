import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SectionHeader from "@/components/features/shared/SectionHeader";
import IndustryCard from "./IndustryCard";

import { industries } from "./industries";

export default function IndustriesSection() {
  return (
    <Section className="pt-4 pb-20 lg:pt-8 lg:pb-24">
      <Container>
        <SectionHeader
          title="What We Offer"
          description="ANVATRA specializes in permanent technology hiring, helping organizations build exceptional engineering teams across Data Engineering, Artificial Intelligence, Azure, Cloud, and Analytics. Our long-term roadmap includes contract staffing, staff augmentation, technology consulting, software development, cloud solutions, and AI services."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              status={industry.status}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}