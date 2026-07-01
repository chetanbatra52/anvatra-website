import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`mb-16 flex flex-col gap-4 ${alignment}`}>
      {badge && <Badge>{badge}</Badge>}

      <Heading
        as="h2"
        title={title}
        description={description}
        className={align === "center" ? "max-w-3xl" : ""}
      />
    </div>
  );
}