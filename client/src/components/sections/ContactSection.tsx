import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Start Your Project",
      subtitle: "Book a Free Consultation to explore AI or custom software solutions.",
      fields: {
        name: "Name",
        email: "Business Email",
        type: "Project Type"
      },
      options: [
        "AI Automation",
        "Web Development",
        "Data Solutions",
        "Other"
      ],
      cta: "Request Consultation"
    },
    ar: {
      title: "ابدأ مشروعك",
      subtitle: "احجز استشارة مجانية لاستكشاف حلول الذكاء الاصطناعي أو البرمجيات المخصصة.",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني للعمل",
        type: "نوع المشروع"
      },
      options: [
        "أتمتة الذكاء الاصطناعي",
        "تطوير الويب",
        "حلول البيانات",
        "أخرى"
      ],
      cta: "اطلب استشارة"
    },
    he: {
      title: "התחל את הפרויקט שלך",
      subtitle: "קבע ייעוץ חינם כדי לחקור פתרונות בינה מלאכותית או תוכנה מותאמים אישית.",
      fields: {
        name: "שם",
        email: "אימייל עסקי",
        type: "סוג פרויקט"
      },
      options: [
        "אוטומציית בינה מלאכותית",
        "פיתוח אתרים",
        "פתרונות נתונים",
        "אחר"
      ],
      cta: "בקש ייעוץ"
    }
  };

  const t = content[language];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            {t.title}
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
          <p className="text-muted-foreground font-medium pt-4 text-lg">
            {t.subtitle}
          </p>
        </div>

        <form className="space-y-6 border-4 border-foreground p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
                {t.fields.name}
              </label>
              <input 
                type="text" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
                {t.fields.email}
              </label>
              <input 
                type="email" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
                dir="ltr"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
              {t.fields.type}
            </label>
            <div className="relative">
              <select className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none appearance-none cursor-pointer">
                {t.options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
              <div className={`absolute top-0 ${language === 'en' ? 'right-4' : 'left-4'} h-full flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <Button type="button" size="lg" className="w-full h-auto py-6 text-xl mt-8">
            {t.cta}
          </Button>
        </form>
      </div>
    </section>
  );
}