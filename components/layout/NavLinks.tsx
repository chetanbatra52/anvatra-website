"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/lib/constants/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-8 lg:flex">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.title}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`
              relative rounded-md
              text-sm font-medium
              transition-all duration-300
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              focus-visible:ring-offset-2
              ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:rounded-full
              after:bg-blue-600
              after:transition-all
              after:duration-300
              ${
                isActive
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }
            `}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}