import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

export default function AboutContent() {
  return (
    <div className="max-w-xl">
      <Badge>About ANVATRA</Badge>

      <Heading
        className="mt-6"
        title="Building Technology Teams That Create Business Impact"
      />

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We help organizations build high-performing technology teams
        and deliver modern cloud, AI, data engineering, and analytics
        solutions. Our focus is on creating long-term partnerships that
        help businesses innovate, scale, and stay ahead in a rapidly
        evolving technology landscape.
      </p>

      <div className="mt-10">
        <Button href="/about">
          Learn More About ANVATRA
        </Button>
      </div>
    </div>
  );
}