import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import TrustItem from "./TrustItem";

export default function TrustBar() {
  return (
    <Section className="pt-8 pb-12 lg:pt-12 lg:pb-16 bg-slate-50">
      <Container>

        <div className="text-center max-w-3xl mx-auto">
          <Heading
  as="h2"
  title="Trusted Technology Partner"
  description="Helping organizations build modern engineering teams across Data, AI, Azure, Cloud and Analytics."
/>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8">

          <TrustItem title="Data Engineering" />

          <TrustItem title="Azure Cloud" />

          <TrustItem title="Artificial Intelligence" />

          <TrustItem title="Analytics" />

          <TrustItem title="Cloud Platforms" />

          <TrustItem title="Technology Staffing" />

        </div>

      </Container>
    </Section>
  );
}