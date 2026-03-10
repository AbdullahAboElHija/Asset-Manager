import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ValuePropSection />
        <OfferSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}