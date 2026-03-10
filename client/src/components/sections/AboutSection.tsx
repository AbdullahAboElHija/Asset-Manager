import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "The Hybrid Model",
      title: "Enterprise Architecture. \nAgile Innovation.",
      p1: "We operate as a flat vector for your business. By cutting out unnecessary agency bloat, we deliver unparalleled efficiency.",
      p2: "Our projects are structurally sound, architected by seasoned senior tech experts, and rapidly executed by top-tier university graduates.",
      p3: "No complex hierarchies. Just pure, precise execution."
    },
    ar: {
      badge: "النموذج الهجين",
      title: "بنية مؤسسية. \nابتكار مرن.",
      p1: "نحن نعمل كمتجه مسطح لعملك. من خلال التخلص من تعقيدات الوكالات التقليدية، نقدم كفاءة لا مثيل لها.",
      p2: "مشاريعنا مبنية بهيكلية صلبة، يصممها خبراء تقنيون متمرسون، وينفذها بسرعة خريجو جامعات من النخبة.",
      p3: "لا توجد تسلسلات هرمية معقدة. فقط تنفيذ نقي ودقيق."
    },
    he: {
      badge: "המודל ההיברידי",
      title: "ארכיטקטורה ארגונית. \nחדשנות זריזה.",
      p1: "אנו פועלים כווקטור שטוח עבור העסק שלך. על ידי חיתוך סרבול מיותר של סוכנויות, אנו מספקים יעילות שאין שניה לה.",
      p2: "הפרויקטים שלנו מבוססים מבחינה מבנית, מתוכננים על ידי מומחי טכנולוגיה בכירים ומבוצעים במהירות על ידי בוגרי אוניברסיטאות.",
      p3: "ללא היררכיות מורכבות. רק ביצוע טהור ומדויק."
    }
  };

  const t = content[language];

  return (
    <section className="py-24 border-b-4 border-foreground bg-foreground text-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto border-4 border-primary">
          <div className="p-8 lg:p-16 bg-foreground">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{t.badge}</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8 whitespace-pre-line leading-tight">
              {t.title}
            </h3>
            <div className="space-y-6 text-lg md:text-xl font-medium text-gray-300">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p className={`${language === 'en' ? 'border-l-4 pl-6' : 'border-r-4 pr-6'} border-primary text-white font-bold`}>
                {t.p3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}