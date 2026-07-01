import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { aboutPageContent } from "@/lib/constants/about";

const { story } = aboutPageContent;

export default function Story() {
  return (
    <Section className="pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="px-8 py-3 text-lg font-semibold">
            {story.badge}
          </Badge>

          <div className="mt-10 space-y-8">
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mx-auto max-w-3xl text-xl leading-10 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}