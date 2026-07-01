import { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ValueCard({
  icon: Icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-full flex-col gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h3>

          <p className="leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}