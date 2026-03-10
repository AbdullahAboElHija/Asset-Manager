import { CheckSquare } from "lucide-react";

export function ValuePropSection() {
  const pillars = [
    {
      titleEn: "Mastery & Precision",
      descEn: "Flawless code and AI implementation with strict geometry. We do not do messy workarounds.",
      titleAr: "الإتقان والدقة",
      descAr: "كود خالٍ من العيوب وتنفيذ دقيق للذكاء الاصطناعي. نحن لا نقبل بالحلول المؤقتة الفوضوية.",
    },
    {
      titleEn: "The Hybrid Advantage",
      descEn: "Veteran leadership combining enterprise experience with brilliant, agile emerging talent.",
      titleAr: "الميزة الهجينة",
      descAr: "قيادة مخضرمة تجمع بين الخبرة المؤسسية والمواهب الناشئة الذكية والمرنة.",
    },
    {
      titleEn: "Transparent Execution",
      descEn: "No smoke and mirrors. Just clear, future-proof AI and software solutions built for scale.",
      titleAr: "تنفيذ شفاف",
      descAr: "لا يوجد خداع أو إخفاء. فقط حلول ذكاء اصطناعي وبرمجيات واضحة ومستقبلية مصممة للتوسع.",
    }
  ];

  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">Why Choose Itqan? <span className="text-primary px-4">|</span> <span className="font-ar">لماذا إتقان؟</span></h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                
                <div className="space-y-4 text-right font-ar">
                  <h3 className="text-2xl font-bold">{pillar.titleAr}</h3>
                  <p className="text-muted-foreground font-medium text-lg">{pillar.descAr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}