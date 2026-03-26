import { NavbarVentoa } from "@/components/navbar-ventoa";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { MethodologyTimeline } from "@/components/methodology-timeline";
import { AccountingSolutions } from "@/components/accounting-solutions";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials";
import { FooterContact } from "@/components/footer-contact";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F9FAFB] selection:bg-[#00AEEF]/20">
      <NavbarVentoa />

      <HeroSection />
      
      <div id="beneficios">
        <FeaturesGrid />
      </div>
      
      <div id="metodologia">
        <MethodologyTimeline />
      </div>

      <div id="solucoes">
        <AccountingSolutions />
      </div>
      
      <div id="planos">
        <PricingSection />
      </div>
      
      <div id="casos">
        <TestimonialsSection />
      </div>
      
      <div id="contato">
        <FooterContact />
      </div>

      <WhatsAppButton />
    </main>
  );
}
