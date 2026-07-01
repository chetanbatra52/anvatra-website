import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`
        py-24
        lg:py-32
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}