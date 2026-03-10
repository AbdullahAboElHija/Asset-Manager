import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function OfferSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Founding Client Partnership",
      title: "Special Launch Offer",
      desc: "Exclusive discount on the first 3 projects we take on. Premium services at a fraction of the cost.",
      cta: "Claim 1 of 3 Spots",
      footnote: "Only for visionary businesses ready to scale."
    },
    ar: {
      badge: "شراكة العميل المؤسس",
      title: "عرض الإطلاق الخاص",
      desc: "خصم حصري على أول 3 مشاريع نستلمها. خدمات متميزة بجزء بسيط من التكلفة.",
      cta: "احجز مقعدك",
      footnote: "فقط للشركات ذات الرؤية المستقبلية المستعدة للتوسع."
    },
    he: {
      badge: "שותפות לקוח מייסד",
      title: "הצעת השקה מיוחדת",
      desc: "הנחה בלעדית על 3 הפרויקטים הראשונים שניקח. שירותי פרימיום בשבריר מהעלות.",
      cta: "תפוס מקום 1 מתוך 3",
      footnote: "רק לעסקים בעלי חזון המוכנים לצמוח."
    }
  };

  const t = content[language];

  return (
    <section className="py-32 border-b-4 border-foreground bg-foreground text-background relative overflow-hidden">
      {/* Strict geometry background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto border-4 border-primary bg-foreground p-8 md:p-16 text-center">
          
          <div className="inline-block border-2 border-primary text-primary px-6 py-2 font-bold text-sm tracking-widest uppercase mb-12">
            {t.badge}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className={`text-center ${language === 'en' ? 'md:text-right' : 'md:text-left'} space-y-2`}>
              <h3 className="text-3xl font-bold uppercase text-white mb-4">{t.title}</h3>
              <p className="text-gray-400 font-medium text-lg max-w-sm">{t.desc}</p>
            </div>

            <div className="w-full md:w-px h-px md:h-32 bg-primary/30 hidden md:block"></div>
            
            <div className="flex justify-center text-primary">
              <h2 className="text-8xl md:text-9xl font-extrabold" dir="ltr">75%</h2>
            </div>
          </div>

          <div className="pt-10 border-t-2 border-foreground/50">
            <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-8" variant="primary">
              {t.cta}
            </Button>
            <p className="mt-6 text-sm text-gray-500 font-medium uppercase tracking-wide">
              {t.footnote}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}