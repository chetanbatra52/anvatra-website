import { ReactNode } from "react";

interface TechnologyNodeProps {
  title: ReactNode;
  className?: string;
}

export default function TechnologyNode({
  title,
  className = "",
}: TechnologyNodeProps) {
  return (
    <div
      className={`
        flex
        min-h-[110px]
        items-center
        justify-center
        rounded-2xl
        border
        px-6
        py-7
        text-center
        font-semibold
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${className}
      `}
    >
      {title}
    </div>
  );
}