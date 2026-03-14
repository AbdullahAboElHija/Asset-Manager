import { Bot, Code2, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Bot,
    title: {
      en: "AI Automation",
      ar: "أتمتة الذكاء الاصطناعي",
      he: "אוטומציית בינה מלאכותית"
    },
    desc: {
      en: "Streamlining operations through intelligent workflows. We implement autonomous systems that eliminate manual bottlenecks.",
      ar: "تبسيط العمليات من خلال مسارات عمل ذكية. نحن ننفذ أنظمة مستقلة تقضي على الاختناقات اليدوية.",
      he: "ייעול תהליכים באמצעות זרימות עבודה חכמות. אנו מיישמים מערכות אוטונומיות המבטלות צווארי בקבוק ידניים."
    }
  },
  {
    icon: Code2,
    title: {
      en: "Web Development",
      ar: "تطوير الويب",
      he: "פיתוח אתרים"
    },
    desc: {
      en: "Building scalable web apps with rigid architecture. Engineered for high performance and absolute reliability.",
      ar: "بناء تطبيقات ويب قابلة للتطوير ببنية صلبة. مصممة لأداء عالٍ وموثوقية مطلقة.",
      he: "בניית יישומי אינטרנט ברי הרחבה בארכיטקטורה קשיחה. מהונדסים לביצועים גבוהים ואמינות מוחלטת."
    }
  },
  {
    icon: Database,
    title: {
      en: "Data Solutions",
      ar: "حلول البيانات",
      he: "פתרונות נתונים"
    },
    desc: {
      en: "Extracting actionable insights from complex datasets. We turn raw information into strategic business leverage.",
      ar: "استخراج رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة. نحول المعلومات الخام إلى نفوذ أعمال استراتيجي.",
      he: "הפקת תובנות מעשיות ממאגרי נתונים מורכבים. אנו הופכים מידע גולמי למינוף עסקי אסטרטגי."
    }
  }
];

export function ServicesSection() {
  const { language } = useLanguage();

  const titleText = {
    en: "Our Services",
    ar: "خدماتنا",
    he: "השירותים שלנו"
  }[language];

  return (
    <section id="services" className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            {titleText}
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-4 border-foreground">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Handle logical borders based on layout direction
            let borderClasses = "";
            if (index !== services.length - 1) {
              borderClasses = language === 'en' 
                ? "border-b-4 lg:border-b-0 lg:border-r-4 border-foreground"
                : "border-b-4 lg:border-b-0 lg:border-l-4 border-foreground";
            }

            return (
              <div 
                key={index}
                className={`p-8 md:p-12 flex flex-col group hover:bg-foreground hover:text-background transition-colors duration-300 ${borderClasses}`}
              >
                <div className="mb-8 p-4 border-2 border-primary inline-block w-fit bg-background transition-colors">
                  <Icon className="w-12 h-12 text-primary transition-colors" />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">{service.title[language]}</h3>
                    <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed text-lg">
                      {service.desc[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}