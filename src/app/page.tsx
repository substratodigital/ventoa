import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { MethodologyTimeline } from "@/components/methodology-timeline";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials";
import { FooterContact } from "@/components/footer-contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      
      <FeaturesGrid />
      
      <MethodologyTimeline />
      
      <PricingSection />
      
      <TestimonialsSection />
      
      <FooterContact />
    </main>
  );
}
