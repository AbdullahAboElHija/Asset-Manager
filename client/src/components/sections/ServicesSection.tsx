import { Bot, Code2, Database } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    titleEn: "AI Automation",
    descEn: "Streamlining operations through intelligent workflows. We implement autonomous systems that eliminate manual bottlenecks.",
    titleAr: "أتمتة الذكاء الاصطناعي",
    descAr: "تبسيط العمليات من خلال مسارات عمل ذكية. نحن ننفذ أنظمة مستقلة تقضي على الاختناقات اليدوية.",
  },
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    titleEn: "Web Development",
    descEn: "Building scalable web apps with rigid architecture. Engineered for high performance and absolute reliability.",
    titleAr: "تطوير الويب",
    descAr: "بناء تطبيقات ويب قابلة للتطوير ببنية صلبة. مصممة لأداء عالٍ وموثوقية مطلقة.",
  },
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    titleEn: "Data Solutions",
    descEn: "Extracting actionable insights from complex datasets. We turn raw information into strategic business leverage.",
    titleAr: "حلول البيانات",
    descAr: "استخراج رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة. نحول المعلومات الخام إلى نفوذ أعمال استراتيجي.",
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">Our Services <span className="text-primary px-4">|</span> <span className="font-ar">خدماتنا</span></h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-foreground">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-10 flex flex-col group hover:bg-foreground hover:text-background transition-colors duration-300 ${
                index !== services.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4 border-foreground' : ''
              }`}
            >
              <div className="mb-8 p-4 border-2 border-primary inline-block w-fit bg-background group-hover:bg-primary transition-colors">
                <div className="group-hover:text-background">{service.icon}</div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-3">{service.titleEn}</h3>
                  <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed">
                    {service.descEn}
                  </p>
                </div>
                
                <div className="h-px w-full bg-foreground/20 group-hover:bg-background/20 my-6"></div>
                
                <div className="text-right font-ar">
                  <h3 className="text-2xl font-bold mb-3">{service.titleAr}</h3>
                  <p className="text-muted-foreground group-hover:text-gray-400 font-medium leading-relaxed text-lg">
                    {service.descAr}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}