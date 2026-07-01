"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="border-t border-slate-200 bg-white md:hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <ul className="flex flex-col gap-6">
          {links.map((link, index) => (
            <li key={link.href}>
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={onClose}
                className="text-base font-medium text-slate-700 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Button
              className="w-full"
              onClick={onClose}
            >
              Schedule Discovery Call
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}