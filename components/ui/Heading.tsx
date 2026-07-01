import { ElementType } from "react";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  className = "",
}: HeadingProps) {
  const Tag: ElementType = as;

  const headingStyles = {
    h1: "text-5xl md:text-6xl lg:text-7xl",
    h2: "text-4xl lg:text-5xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };

  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      )}

      <Tag
        className={`
          max-w-4xl
          font-semibold
          tracking-tight
          leading-tight
          text-slate-900
          ${headingStyles[as]}
          ${className}
        `}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={`
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
            ${align === "center" ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}