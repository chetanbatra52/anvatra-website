import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    width: 170,
    height: 70,
  },
  md: {
    width: 230,
    height: 95,
  },
  lg: {
    width: 280,
    height: 115,
  },
};

export default function Logo({
  size = "md",
}: LogoProps) {
  const current = sizes[size];

  return (
    <Link
      href="/"
      aria-label="Go to ANVATRA homepage"
      className="flex items-center rounded-md transition-opacity duration-300 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <Image
        src="/branding/logo.png"
        alt="ANVATRA Technologies logo"
        width={current.width}
        height={current.height}
        priority
        className="h-[76px] w-auto object-contain"
      />
    </Link>
  );
}