import {
  BrainCircuit,
  Cloud,
  Database,
  Users,
} from "lucide-react";

const highlights = [
  {
    title: "Azure Cloud",
    icon: Cloud,
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
  },
  {
    title: "Data Engineering",
    icon: Database,
  },
  {
    title: "Technology Staffing",
    icon: Users,
  },
];

export default function AboutHighlights() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {highlights.map(({ title, icon: Icon }) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <Icon className="mb-4 h-8 w-8 text-blue-600" />

          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>
        </div>
      ))}
    </div>
  );
}