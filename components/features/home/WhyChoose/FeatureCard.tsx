import Card from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group hover:border-blue-500 transition-all duration-300">
      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <CheckCircle2 size={24} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {description}
          </p>
        </div>

      </div>
    </Card>
  );
}