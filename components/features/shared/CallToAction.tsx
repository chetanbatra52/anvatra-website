import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
}

export default function CallToAction({
  title = "Let's Build Your Next Great Team.",
  description =
    "Whether you're hiring a single specialist or building an entire technology team, ANVATRA is ready to help you find exceptional technology talent aligned with your business goals.",
  primaryText = "Start Hiring",
  secondaryText = "Schedule Discovery Call",
}: CallToActionProps) {
  return (
    <Section className="pt-12 pb-12 lg:pt-16 lg:pb-16">
      <Container>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-8 py-12 md:px-16 md:py-14">
          <Heading
            title={title}
            description={description}
            align="center"
            className="mx-auto"
          />

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">
  {primaryText}
</Button>

<Button variant="outline" href="/contact">
  {secondaryText}
</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}