import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import HeroVisual from "../home/Hero/HeroVisual";

export default function AboutSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <Badge>Who We Are</Badge>

            <Heading
  className="mt-6"
  title="Building Technology Teams That Drive Business Growth"
/>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At ANVATRA, we help organizations build exceptional technology
              teams and deliver modern cloud, AI, analytics, and data
              engineering solutions. Our focus is on creating long-term
              partnerships that enable businesses to innovate, scale, and stay
              ahead in an ever-changing technology landscape.
            </p>

            <div className="mt-10">
              <Button href="/about">
  Learn More About ANVATRA
</Button>
            </div>
          </div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}