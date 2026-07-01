import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Data Engineering",
  "Artificial Intelligence",
  "Azure Cloud",
  "Cloud Platforms",
];

export default function HeroHighlights() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 text-slate-700"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <span className="font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
}