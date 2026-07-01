import ServicesHero from "@/components/features/services/ServicesHero";
import ServicesGrid from "@/components/features/services/ServicesGrid";
import WhyChooseServices from "@/components/features/services/WhyChooseServices";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseServices />
    </>
  );
}