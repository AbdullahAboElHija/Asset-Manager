import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export default function Portfolio() {
  const { language } = useLanguage();

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    queryFn: () => fetch("/api/projects").then(r => r.json()),
  });

  const t = {
    en: { title: "Our Works", subtitle: "A selection of strictly engineered digital products.", empty: "Projects coming soon." },
    ar: { title: "أعمالنا", subtitle: "مجموعة مختارة من المنتجات الرقمية المصممة بدقة.", empty: "المشاريع قريباً." },
    he: { title: "העבודות שלנו", subtitle: "מבחר מוצרים דיגיטליים מהונדסים בקפידה.", empty: "פרויקטים בקרוב." }
  }[language];

  const getTitle = (p: Project) => language === 'ar' ? p.titleAr : language === 'he' ? p.titleHe : p.titleEn;
  const getDesc = (p: Project) => language === 'ar' ? p.descAr : language === 'he' ? p.descHe : p.descEn;

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

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-foreground border-t-primary animate-spin"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20 border-4 border-foreground">
              <p className="text-2xl font-bold text-muted-foreground uppercase">{t.empty}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project._id} className="border-4 border-foreground group cursor-pointer bg-background hover:bg-foreground hover:text-background transition-colors duration-300" data-testid={`card-project-${project._id}`}>
                  <div className="h-48 border-b-4 border-foreground overflow-hidden">
                    <img src={project.imageUrl} alt={getTitle(project)} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block border-2 border-primary text-primary px-3 py-1 font-bold text-xs uppercase mb-4 bg-background">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 uppercase">{getTitle(project)}</h3>
                    <p className="text-muted-foreground group-hover:text-gray-400 font-medium">{getDesc(project)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
