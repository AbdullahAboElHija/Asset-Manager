import { CheckSquare } from "lucide-react";

export function ValuePropSection() {
  const pillars = [
    {
      titleEn: "Mastery & Precision",
      descEn: "Flawless code and AI implementation with strict geometry. We do not do messy workarounds.",
      titleAr: "الإتقان والدقة",
      descAr: "كود خالٍ من العيوب وتنفيذ دقيق للذكاء الاصطناعي. نحن لا نقبل بالحلول المؤقتة الفوضوية.",
      titleHe: "מומחיות ודיוק",
      descHe: "קוד ללא רבב ויישום בינה מלאכותית עם גיאומטריה קפדנית. אנחנו לא עושים מעקפים מבולגנים.",
    },
    {
      titleEn: "The Hybrid Advantage",
      descEn: "Veteran leadership combining enterprise experience with brilliant, agile emerging talent.",
      titleAr: "الميزة الهجينة",
      descAr: "قيادة مخضرمة تجمع بين الخبرة المؤسسية والمواهب الناشئة الذكية والمرنة.",
      titleHe: "היתרון ההיברידי",
      descHe: "מנהיגות ותיקה המשלבת ניסיון ארגוני עם כישרון עולה מבריק וזריז.",
    },
    {
      titleEn: "Transparent Execution",
      descEn: "No smoke and mirrors. Just clear, future-proof AI and software solutions built for scale.",
      titleAr: "تنفيذ شفاف",
      descAr: "لا يوجد خداع أو إخفاء. فقط حلول ذكاء اصطناعي وبرمجيات واضحة ومستقبلية مصممة للتوسع.",
      titleHe: "ביצוע שקוף",
      descHe: "ללא עשן ומראות. רק פתרונות בינה מלאכותית ותוכנה ברורים ומוכנים לעתיד שנבנו להתרחבות.",
    }
  ];

  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight flex flex-col lg:flex-row items-center justify-center gap-4">
            <span>Why Choose Itqan?</span> 
            <span className="text-primary hidden lg:inline">|</span> 
            <span className="font-ar">لماذا إتقان؟</span>
            <span className="text-primary hidden lg:inline">|</span> 
            <span className="font-he">למה לבחור באיתקאן?</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="border-4 border-foreground p-8 relative overflow-hidden group hover:border-primary transition-colors duration-300">
              {/* Decorative square corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-foreground group-hover:bg-primary transition-colors"></div>
              
              <div className="space-y-8 relative z-10">
                <CheckSquare className="w-10 h-10 text-primary" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase">{pillar.titleEn}</h3>
                  <p className="text-muted-foreground font-medium">{pillar.descEn}</p>
                </div>
                
                <div className="w-full h-1 bg-foreground/10"></div>
                
                <div className="space-y-4 text-right font-ar" dir="rtl">
                  <h3 className="text-xl md:text-2xl font-bold">{pillar.titleAr}</h3>
                  <p className="text-muted-foreground font-medium text-lg">{pillar.descAr}</p>
                </div>

                <div className="w-full h-1 bg-foreground/10"></div>
                
                <div className="space-y-4 text-right font-he" dir="rtl">
                  <h3 className="text-xl md:text-2xl font-bold">{pillar.titleHe}</h3>
                  <p className="text-muted-foreground font-medium text-lg">{pillar.descHe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}