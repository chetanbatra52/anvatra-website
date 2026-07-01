import { CheckCircle2 } from "lucide-react";

interface TrustItemProps {
  title: string;
}

export default function TrustItem({
  title,
}: TrustItemProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        className="text-blue-600"
        size={22}
      />

      <span className="font-medium text-slate-700">
        {title}
      </span>
    </div>
  );
}