import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <h2 className="mt-6 text-2xl font-semibold text-slate-900">
            Loading...
          </h2>

          <p className="mt-3 text-slate-600">
            Preparing your experience.
          </p>
        </div>
      </Container>
    </Section>
  );
}