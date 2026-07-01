import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-blue-200
        bg-blue-50
        px-4
        py-2
        text-sm
        font-medium
        text-blue-700
        ${className}
      `}
    >
      {children}
    </div>
  );
}