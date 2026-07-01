import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function VisionSection() {
  return (
    <Section className="pt-6 pb-20 lg:pt-10 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Heading
            as="h2"
            align="center"
            title="Why ANVATRA Exists"
            description="Organizations need exceptional technology talent to keep pace with rapid innovation. Finding the right engineering talent and technology expertise shouldn't slow business growth."
          />

          <p className="mt-8 text-xl leading-9 text-slate-600">
            ANVATRA exists to help organizations build stronger engineering
            teams, embrace innovation, and create long-term business value
            through people, technology, and trusted partnerships.
          </p>

          <p className="mt-10 text-lg font-medium text-slate-900">
            — The ANVATRA Vision
          </p>

          <div className="mt-10">
            <Button>
              Our Story
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}