import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "404",
      subtitle: "Page Not Found",
      desc: "The page you're looking for doesn't exist or has been moved.",
      cta: "Back to Home"
    },
    ar: {
      title: "404",
      subtitle: "الصفحة غير موجودة",
      desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      cta: "العودة للرئيسية"
    },
    he: {
      title: "404",
      subtitle: "הדף לא נמצא",
      desc: "הדף שאתה מחפש לא קיים או שהועבר.",
      cta: "חזרה לדף הבית"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <SEOHead
        title={{
          en: "404 — Page Not Found | Itqan Agency",
          ar: "404 — الصفحة غير موجودة | إتقان",
          he: "404 — הדף לא נמצא | איתקאן"
        }}
        description={{
          en: "This page doesn't exist. Return to Itqan Agency homepage.",
          ar: "هذه الصفحة غير موجودة. العودة إلى الصفحة الرئيسية لإتقان.",
          he: "דף זה לא קיים. חזרה לדף הבית של איתקאן."
        }}
        path="/404"
      />

      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold leading-none tracking-tighter text-primary">
          {t.title}
        </h1>
        <div className="w-24 h-2 bg-primary mx-auto"></div>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">
          {t.subtitle}
        </h2>
        <p className="text-muted-foreground font-medium text-lg">
          {t.desc}
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block border-4 border-foreground bg-foreground text-background font-bold uppercase tracking-wide px-8 py-4 text-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
