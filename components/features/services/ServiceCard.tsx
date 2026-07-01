import {
  Users,
  Briefcase,
  Layers,
  Code2,
  Cloud,
  Database,
  Sparkles,
  Lightbulb,
} from "lucide-react";

import Card from "@/components/ui/Card";
import type { Service } from "@/lib/types/service";

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  layers: Layers,
  code: Code2,
  cloud: Cloud,
  database: Database,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const { title, description, icon } = service;

  const Icon = iconMap[icon];

  return (
    <Card className="h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-3">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Card>
  );
}