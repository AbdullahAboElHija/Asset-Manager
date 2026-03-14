import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <ScrollReveal><HeroSection /></ScrollReveal>
        <ScrollReveal><ServicesSection /></ScrollReveal>
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><ValuePropSection /></ScrollReveal>
        <ScrollReveal><OfferSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}