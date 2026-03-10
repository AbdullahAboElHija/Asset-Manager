import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const MOCK_PROJECTS = [
  {
    id: 1,
    titleEn: "FinTech Dashboard",
    titleAr: "لوحة تحكم التكنولوجيا المالية",
    titleHe: "לוח בקרה פיננסי",
    descEn: "A high-performance financial analytics platform for enterprise.",
    descAr: "منصة تحليلات مالية عالية الأداء للمؤسسات.",
    descHe: "פלטפורמת ניתוח פיננסי בעלת ביצועים גבוהים לארגונים.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    titleEn: "AI Customer Support Agent",
    titleAr: "دعم العملاء بالذكاء الاصطناعي",
    titleHe: "סוכן תמיכת לקוחות בינה מלאכותית",
    descEn: "Autonomous AI agent that reduced human support load by 60%.",
    descAr: "وكيل ذكاء اصطناعي مستقل قلل من عبء الدعم البشري بنسبة 60٪.",
    descHe: "סוכן בינה מלאכותית אוטונומי שהפחית את עומס התמיכה האנושי ב-60%.",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    titleEn: "Healthcare Data Warehouse",
    titleAr: "مستودع بيانات الرعاية الصحية",
    titleHe: "מחסן נתוני בריאות",
    descEn: "Centralized data infrastructure compliant with global standards.",
    descAr: "بنية تحتية مركزية للبيانات متوافقة مع المعايير العالمية.",
    descHe: "תשתית נתונים מרוכזת התואמת לתקנים בינלאומיים.",
    category: "Data Solutions",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4bacea4?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export default function Portfolio() {
  const { language } = useLanguage();

  const t = {
    en: { title: "Our Works", subtitle: "A selection of strictly engineered digital products." },
    ar: { title: "أعمالنا", subtitle: "مجموعة مختارة من المنتجات الرقمية المصممة بدقة." },
    he: { title: "העבודות שלנו", subtitle: "מבחר מוצרים דיגיטליים מהונדסים בקפידה." }
  }[language];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">{t.title}</h1>
            <div className="w-24 h-2 bg-primary mx-auto"></div>
            <p className="text-muted-foreground font-medium text-lg mt-4 max-w-xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PROJECTS.map((project) => (
              <div key={project.id} className="border-4 border-foreground group cursor-pointer bg-background hover:bg-foreground hover:text-background transition-colors duration-300">
                <div className="h-48 border-b-4 border-foreground overflow-hidden">
                  <img src={project.image} alt={project.titleEn} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="inline-block border-2 border-primary text-primary px-3 py-1 font-bold text-xs uppercase mb-4 bg-background">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">
                    {language === 'ar' ? project.titleAr : language === 'he' ? project.titleHe : project.titleEn}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-gray-400 font-medium">
                    {language === 'ar' ? project.descAr : language === 'he' ? project.descHe : project.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}