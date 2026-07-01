import { CheckCircle2 } from "lucide-react";

import Card from "@/components/ui/Card";

type PromiseCardProps = {
  title: string;
  description: string;
};

export default function PromiseCard({
  title,
  description,
}: PromiseCardProps) {
  return (
    <Card className="group h-full border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <CheckCircle2 className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}