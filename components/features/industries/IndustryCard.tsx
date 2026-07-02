import { LucideIcon, CheckCircle2, Clock3 } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type IndustryCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "Available Today" | "Coming Soon";
  featured?: boolean;
};

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  status,
  featured = false,
}: IndustryCardProps) {
  const isAvailable = status === "Available Today";

  return (
    <Card
      className={`group h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl ${
        featured ? "lg:col-span-2" : ""
      } ${
        isAvailable
          ? "border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/40 to-white shadow-lg"
          : "border border-slate-200 bg-white"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div
            className={`flex items-center justify-center rounded-2xl transition-colors ${
              featured ? "h-16 w-16" : "h-12 w-12"
            } ${
              isAvailable
                ? "bg-blue-100 text-blue-600"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            <Icon className={featured ? "h-8 w-8" : "h-6 w-6"} />
          </div>

          <Badge
            className={
              isAvailable
                ? "border border-green-200 bg-green-50 text-green-700"
                : "border border-slate-200 bg-slate-100 text-slate-600"
            }
          >
            {isAvailable ? (
              <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
            ) : (
              <Clock3 className="mr-1 h-3.5 w-3.5" />
            )}

            {status}
          </Badge>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold tracking-tight text-slate-900 ${
            featured ? "mb-6 text-3xl" : "mb-4 text-xl"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`flex-grow text-slate-600 ${
            featured ? "text-lg leading-9" : "leading-7"
          }`}
        >
          {description}
        </p>

        {/* CTA - Featured Card Only */}
        {featured && (
          <div className="mt-8">
            <Button href="/contact">
              Start Hiring
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}