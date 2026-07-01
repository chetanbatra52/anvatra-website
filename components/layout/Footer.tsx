import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-12 py-20 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Go to ANVATRA homepage"
              className="inline-flex rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Image
                src="/branding/logo-footer.png"
                alt="ANVATRA Technologies logo"
                width={195}
                height={90}
                priority
                className="h-auto w-[210px] object-contain"
              />
            </Link>

            <h3 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
              Building Exceptional
              <br />
              Technology Teams.
            </h3>

            <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
              ANVATRA partners with growing businesses to build exceptional
              technology teams through trusted permanent hiring. As we grow,
              we'll expand into contract staffing, staff augmentation,
              technology consulting, and software, cloud & AI solutions.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <Button href="/contact">Start Hiring</Button>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/"
                  className="rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Offer */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              What We Offer
            </h3>

            <ul className="mt-5 space-y-5">
              <li>
                <div className="font-medium text-slate-900">
                  Permanent Hiring
                </div>
                <span className="text-sm text-emerald-600">
                  Available
                </span>
              </li>

              <li>
                <div className="text-slate-500">
                  Contract Staffing
                </div>
                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>
              </li>

              <li>
                <div className="text-slate-500">
                  Staff Augmentation
                </div>
                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>
              </li>

              <li>
                <div className="text-slate-500">
                  Technology Consulting
                </div>
                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>
              </li>

              <li>
                <div className="text-slate-500">
                  Software, Cloud & AI Solutions
                </div>
                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Connect
            </h3>

            <address className="mt-6 space-y-5 not-italic">
              <a
                href="mailto:contact@anvatra.com"
                className="flex items-center gap-3 rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <Mail
                  size={18}
                  aria-hidden="true"
                />
                contact@anvatra.com
              </a>

         <a
  href="https://www.linkedin.com/company/anvatra-technologies/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-md text-slate-600 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
>
  <span
    className="font-semibold"
    aria-hidden="true"
  >
    in
  </span>

  <span>LinkedIn</span>
</a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 md:flex-row">
          <p>
  ©{" "}
  <time dateTime={new Date().getFullYear().toString()}>
    {new Date().getFullYear()}
  </time>{" "}
  ANVATRA Technologies. All rights reserved.
</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="rounded-md transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="rounded-md transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}