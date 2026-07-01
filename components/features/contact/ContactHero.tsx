import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function ContactHero() {
  return (
    <Section className="pt-16 pb-12 lg:pt-20 lg:pb-16">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Heading
            eyebrow="Contact"
            title="Let's Build Your Team Together."
            description="Whether you're looking for exceptional technology talent or want to discuss your hiring needs, we're here to help. Let's start the conversation."
            as="h1"
            align="center"
            className="mt-4"
          />
        </div>
      </Container>
    </Section>
  );
}