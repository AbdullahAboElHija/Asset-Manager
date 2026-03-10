import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Digital Mastery",
      title: "Flawless",
      titleSpan: "Execution.",
      desc: "We build intelligent software and AI-driven solutions to scale businesses with strict geometry and zero compromises.",
      cta: "Claim Launch Offer"
    },
    ar: {
      badge: "إتقان رقمي",
      title: "تنفيذ",
      titleSpan: "متقن.",
      desc: "نبني برمجيات ذكية وحلولاً مدعومة بالذكاء الاصطناعي لتوسيع نطاق الأعمال بهندسة دقيقة وبلا تنازلات.",
      cta: "احصل على العرض الحصري"
    },
    he: {
      badge: "מומחיות דיגיטלית",
      title: "ביצוע",
      titleSpan: "מושלם.",
      desc: "אנו בונים תוכנה חכמה ופתרונות מבוססי בינה מלאכותית להרחבת עסקים עם גיאומטריה מדויקת וללא פשרות.",
      cta: "קבל הצעת השקה"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b-4 border-foreground overflow-hidden bg-background">
      {/* Abstract geometric background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] border-l-2 border-foreground transform skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] border-t-2 border-foreground transform -skew-y-6 -translate-y-16" />
      </div>

      <div className="container px-4 mx-auto relative z-10 py-20">
        <div className="max-w-4xl space-y-8">
          <div className="inline-block border-2 border-primary text-primary px-4 py-1 font-bold text-sm tracking-widest uppercase">
            {t.badge}
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight uppercase leading-none">
            {t.title} <span className="text-primary block mt-2">{t.titleSpan}</span>
          </h1>
          <p className={`text-lg md:text-xl font-medium max-w-2xl ${language === 'en' ? 'border-l-4 pl-6' : 'border-r-4 pr-6'} border-primary`}>
            {t.desc}
          </p>
          <div className="pt-8">
            <Button size="lg" className="w-full sm:w-auto text-xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} data-testid="hero-cta">
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}