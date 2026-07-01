import { CheckCircle2 } from "lucide-react";

interface BenefitItemProps {
  text: string;
}

export default function BenefitItem({
  text,
}: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-slate-50">
      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />

      <p className="text-lg font-medium text-slate-800">
        {text}
      </p>
    </div>
  );
}