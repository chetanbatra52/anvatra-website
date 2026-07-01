import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link href="/contact">
        <Button size="lg">
          Schedule Discovery Call
        </Button>
      </Link>

      <Link href="/services">
        <Button
          variant="outline"
          size="lg"
        >
          Explore Services
        </Button>
      </Link>
    </div>
  );
}