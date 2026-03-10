import { CheckSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ValuePropSection() {
  const { language } = useLanguage();

  const titleText = {
    en: "Why Choose Itqan?",
    ar: "لماذا إتقان؟",
    he: "למה לבחור באיתקאן?"
  }[language];

  const pillars = [
    {
      title: {
        en: "Mastery & Precision",
        ar: "الإتقان والدقة",
        he: "מומחיות ודיוק"
      },
      desc: {
        en: "Flawless code and AI implementation with strict geometry. We do not do messy workarounds.",
        ar: "كود خالٍ من العيوب وتنفيذ دقيق للذكاء الاصطناعي. نحن لا نقبل بالحلول المؤقتة الفوضوية.",
        he: "קוד ללא רבב ויישום בינה מלאכותית עם גיאומטריה קפדנית. אנחנו לא עושים מעקפים מבולגנים."
      }
    },
    {
      title: {
        en: "The Hybrid Advantage",
        ar: "الميزة الهجينة",
        he: "היתרון ההיברידי"
      },
      desc: {
        en: "Veteran leadership combining enterprise experience with brilliant, agile emerging talent.",
        ar: "قيادة مخضرمة تجمع بين الخبرة المؤسسية والمواهب الناشئة الذكية والمرنة.",
        he: "מנהיגות ותיקה המשלבת ניסיון ארגוני עם כישרון עולה מבריק וזריז."
      }
    },
    {
      title: {
        en: "Transparent Execution",
        ar: "تنفيذ شفاف",
        he: "ביצוע שקוף"
      },
      desc: {
        en: "No smoke and mirrors. Just clear, future-proof AI and software solutions built for scale.",
        ar: "لا يوجد خداع أو إخفاء. فقط حلول ذكاء اصطناعي وبرمجيات واضحة ومستقبلية مصممة للتوسع.",
        he: "ללא עשן ומראות. רק פתרונות בינה מלאכותית ותוכנה ברורים ומוכנים לעתיד שנבנו להתרחבות."
      }
    }
  ];

  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            {titleText}
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="border-4 border-foreground p-8 md:p-10 relative overflow-hidden group hover:border-primary transition-colors duration-300">
              {/* Decorative square corner */}
              <div className={`absolute top-0 ${language === 'en' ? 'right-0' : 'left-0'} w-8 h-8 bg-foreground group-hover:bg-primary transition-colors`}></div>
              
              <div className="space-y-6 relative z-10">
                <CheckSquare className="w-12 h-12 text-primary" />
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold uppercase">{pillar.title[language]}</h3>
                  <p className="text-muted-foreground font-medium text-lg">{pillar.desc[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}