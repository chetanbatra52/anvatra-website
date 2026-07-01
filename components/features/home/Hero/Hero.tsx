import HeroActions from "./HeroActions";
import HeroVisual from "./HeroVisual";
import Badge from "@/components/ui/Badge";
import HeroHighlights from "./HeroHighlights";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="pt-16 pb-12 lg:pt-20 lg:pb-16">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Side */}
          <div>
            <Badge>
              Technology Talent &amp; Solutions Partner
            </Badge>

            <div className="mt-6">
              <Heading
                as="h1"
                className="max-w-none"
                title="Building Exceptional Technology Teams"
                description="ANVATRA helps organizations build high-performing engineering teams specializing in Data Engineering, Artificial Intelligence, Azure, Cloud, and Analytics."
              />
            </div>

            <HeroActions />

            <HeroHighlights />
          </div>

          {/* Right Side */}
          <div className="hidden lg:block lg:-mt-6">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}