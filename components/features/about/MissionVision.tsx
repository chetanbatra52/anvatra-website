import { Target, Rocket } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

import { aboutPageContent } from "@/lib/constants/about";

const { purpose } = aboutPageContent;

export default function MissionVision() {
  return (
    <Section className="pt-8 pb-20 lg:pt-12 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="px-8 py-3 text-lg font-semibold">
            {purpose.badge}
          </Badge>

          <Heading
            title={purpose.title}
            description={purpose.description}
            as="h2"
            align="center"
            className="mt-4"
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="p-10">
            <Target className="mb-6 h-10 w-10 text-blue-600" />

            <h3 className="text-2xl font-semibold text-slate-900">
              {purpose.mission.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              {purpose.mission.description}
            </p>
          </Card>

          <Card className="p-10">
            <Rocket className="mb-6 h-10 w-10 text-blue-600" />

            <h3 className="text-2xl font-semibold text-slate-900">
              {purpose.vision.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              {purpose.vision.description}
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}