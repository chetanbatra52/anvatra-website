import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="group cursor-pointer hover:border-blue-500">
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4">
        Learn More
        <ArrowRight size={18} />
      </div>
    </Card>
  );
}