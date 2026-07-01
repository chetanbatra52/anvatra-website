"use client";

import { useEffect } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Something Went Wrong
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            We hit an unexpected error.
          </h1>

          <p className="mt-6 max-w-xl text-slate-600">
            Please try again. If the problem continues, feel free to contact our
            team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Try Again
            </button>

            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}