import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SEOHead } from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title={{
          en: "Itqan Agency | AI Agency & Software House",
          ar: "إتقان | وكالة ذكاء اصطناعي وبرمجيات",
          he: "איתקאן | סוכנות בינה מלאכותית ובית תוכנה"
        }}
        description={{
          en: "We build intelligent software, AI automation, landing pages & online shops to scale your business.",
          ar: "نبني برمجيات ذكية وحلول أتمتة بالذكاء الاصطناعي وصفحات هبوط ومتاجر إلكترونية لتوسيع أعمالك.",
          he: "אנו בונים תוכנה חכמה, אוטומציית בינה מלאכותית, דפי נחיתה וחנויות מקוונות להרחבת העסק שלך."
        }}
        path="/"
      />
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