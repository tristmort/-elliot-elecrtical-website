import { HeroCarousel } from "@/app/components/home/HeroCarousel";
import { SolarAuthority } from "@/app/components/home/SolarAuthority";
import { TrustCompliance } from "@/app/components/home/TrustCompliance";
import { ProcessSection } from "@/app/components/home/ProcessSection";
import { Testimonials } from "@/app/components/home/Testimonials";
import { CTASection } from "@/app/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <SolarAuthority />
      <TrustCompliance />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
