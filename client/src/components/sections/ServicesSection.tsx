import { Bot, Code2, Database } from "lucide-react";

const services = [
  {
    icon: Bot,
    titleEn: "AI Automation",
    descEn: "Streamlining operations through intelligent workflows. We implement autonomous systems that eliminate manual bottlenecks.",
    titleAr: "أتمتة الذكاء الاصطناعي",
    descAr: "تبسيط العمليات من خلال مسارات عمل ذكية. نحن ننفذ أنظمة مستقلة تقضي على الاختناقات اليدوية.",
    titleHe: "אוטומציית בינה מלאכותית",
    descHe: "ייעול תהליכים באמצעות זרימות עבודה חכמות. אנו מיישמים מערכות אוטונומיות המבטלות צווארי בקבוק ידניים.",
  },
  {
    icon: Code2,
    titleEn: "Web Development",
    descEn: "Building scalable web apps with rigid architecture. Engineered for high performance and absolute reliability.",
    titleAr: "تطوير الويب",
    descAr: "بناء تطبيقات ويب قابلة للتطوير ببنية صلبة. مصممة لأداء عالٍ وموثوقية مطلقة.",
    titleHe: "פיתוח אתרים",
    descHe: "בניית יישומי אינטרנט ברי הרחבה בארכיטקטורה קשיחה. מהונדסים לביצועים גבוהים ואמינות מוחלטת.",
  },
  {
    icon: Database,
    titleEn: "Data Solutions",
    descEn: "Extracting actionable insights from complex datasets. We turn raw information into strategic business leverage.",
    titleAr: "حلول البيانات",
    descAr: "استخراج رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة. نحول المعلومات الخام إلى نفوذ أعمال استراتيجي.",
    titleHe: "פתרונות נתונים",
    descHe: "הפקת תובנות מעשיות ממאגרי נתונים מורכבים. אנו הופכים מידע גולמי למינוף עסקי אסטרטגי.",
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight flex flex-col md:flex-row items-center justify-center gap-4">
            <span>Our Services</span> 
            <span className="text-primary hidden md:inline">|</span> 
            <span className="font-ar">خدماتنا</span>
            <span className="text-primary hidden md:inline">|</span> 
            <span className="font-he">השירותים שלנו</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-4 border-foreground">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`p-8 md:p-10 flex flex-col group hover:bg-foreground hover:text-background transition-colors duration-300 ${
                  index !== services.length - 1 ? 'border-b-4 lg:border-b-0 lg:border-r-4 border-foreground' : ''
                }`}
              >
                <div className="mb-8 p-4 border-2 border-primary inline-block w-fit bg-background transition-colors">
                  <Icon className="w-12 h-12 text-primary transition-colors" />
                </div>
                
                <div className="flex-1 space-y-8">
                  {/* English */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase mb-3">{service.titleEn}</h3>
                    <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed">
                      {service.descEn}
                    </p>
                  </div>
                  
                  <div className="h-px w-full bg-foreground/20 group-hover:bg-background/20"></div>
                  
                  {/* Arabic */}
                  <div className="text-right font-ar" dir="rtl">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{service.titleAr}</h3>
                    <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed text-lg">
                      {service.descAr}
                    </p>
                  </div>

                  <div className="h-px w-full bg-foreground/20 group-hover:bg-background/20"></div>

                  {/* Hebrew */}
                  <div className="text-right font-he" dir="rtl">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{service.titleHe}</h3>
                    <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed text-lg">
                      {service.descHe}
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