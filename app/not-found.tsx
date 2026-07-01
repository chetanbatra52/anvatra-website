import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Error 404
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Page Not Found
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Back to Home</Button>

            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}