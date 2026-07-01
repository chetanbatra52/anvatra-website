import Hero from "@/components/features/home/Hero/Hero";
import Services from "@/components/features/home/Services/Services";
import TrustBar from "@/components/features/home/TrustBar/TrustBar";
import WhyChoose from "@/components/features/home/WhyChoose/WhyChoose";
import CallToAction from "@/components/features/shared/CallToAction";

import IndustriesSection from "@/components/features/industries/IndustriesSection";
import VisionSection from "@/components/features/vision/VisionSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustBar />
      <WhyChoose />
      <IndustriesSection />
      <VisionSection />
      <CallToAction />
      
    </>
  );
}