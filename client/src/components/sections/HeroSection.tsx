import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b-4 border-foreground overflow-hidden bg-background">
      {/* Abstract geometric background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] border-l-2 border-foreground transform skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] border-t-2 border-foreground transform -skew-y-6 -translate-y-16" />
      </div>

      <div className="container px-4 mx-auto relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* English Content */}
          <div className="space-y-8">
            <div className="inline-block border-2 border-primary text-primary px-4 py-1 font-bold text-sm tracking-widest uppercase">
              Digital Mastery
            </div>
            <h1 className="text-4xl xl:text-6xl font-extrabold tracking-tight uppercase leading-none">
              Flawless <span className="text-primary block">Execution.</span>
            </h1>
            <p className="text-lg font-medium border-l-4 border-primary pl-6">
              We build intelligent software and AI-driven solutions to scale businesses with strict geometry and zero compromises.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto" data-testid="hero-cta-en">
                Claim Launch Offer
              </Button>
            </div>
          </div>

          {/* Arabic Content */}
          <div className="space-y-8 text-right font-ar border-t-4 lg:border-t-0 lg:border-r-4 border-foreground pt-12 lg:pt-0 lg:pr-12" dir="rtl">
            <div className="inline-block border-2 border-primary text-primary px-4 py-1 font-bold text-sm tracking-widest uppercase">
              إتقان رقمي
            </div>
            <h1 className="text-4xl xl:text-6xl font-bold tracking-tight leading-tight">
              تنفيذ <span className="text-primary block">متقن.</span>
            </h1>
            <p className="text-lg font-medium border-r-4 border-primary pr-6">
              نبني برمجيات ذكية وحلولاً مدعومة بالذكاء الاصطناعي لتوسيع نطاق الأعمال بهندسة دقيقة وبلا تنازلات.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto text-xl font-ar" data-testid="hero-cta-ar">
                احصل على العرض الحصري
              </Button>
            </div>
          </div>

          {/* Hebrew Content */}
          <div className="space-y-8 text-right font-he border-t-4 lg:border-t-0 lg:border-r-4 border-foreground pt-12 lg:pt-0 lg:pr-12" dir="rtl">
            <div className="inline-block border-2 border-primary text-primary px-4 py-1 font-bold text-sm tracking-widest uppercase">
              מומחיות דיגיטלית
            </div>
            <h1 className="text-4xl xl:text-6xl font-bold tracking-tight leading-tight">
              ביצוע <span className="text-primary block">מושלם.</span>
            </h1>
            <p className="text-lg font-medium border-r-4 border-primary pr-6">
              אנו בונים תוכנה חכמה ופתרונות מבוססי בינה מלאכותית להרחבת עסקים עם גיאומטריה מדויקת וללא פשרות.
            </p>
            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto text-xl font-he" data-testid="hero-cta-he">
                קבל הצעת השקה
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}