import { LucideIcon } from "lucide-react";
import Link from "next/link";

import Card from "@/components/ui/Card";

type ContactOptionCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  href?: string;
};

export default function ContactOptionCard({
  icon: Icon,
  title,
  value,
  description,
  href,
}: ContactOptionCardProps) {
  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon
            className="h-6 w-6"
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          {href ? (
            <Link
              href={href}
              className="mt-2 inline-block rounded-md font-medium text-blue-600 transition hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {value}
            </Link>
          ) : (
            <p className="mt-2 font-medium text-blue-600">
              {value}
            </p>
          )}

          <p className="mt-3 leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}