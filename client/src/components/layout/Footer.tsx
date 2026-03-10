import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      desc: "Software House | AI Agency",
      rights: `© ${new Date().getFullYear()} Itqan Agency. Strict Geometry. Zero Fluff.`
    },
    ar: {
      desc: "إتقان برمجيات | ذكاء اصطناعي",
      rights: `جميع الحقوق محفوظة © ${new Date().getFullYear()} وكالة إتقان`
    },
    he: {
      desc: "בית תוכנה | סוכנות בינה מלאכותית",
      rights: `כל הזכויות שמורות © ${new Date().getFullYear()} סוכנות איתקאן`
    }
  };

  const t = content[language];

  return (
    <footer className="bg-foreground text-background border-t-8 border-primary py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          <div className={`flex flex-col items-center gap-2 text-center ${language !== 'en' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
            <span className="font-extrabold uppercase tracking-tight text-3xl text-primary">
              {language === 'ar' ? 'إتقان' : language === 'he' ? 'איתקאן' : 'Itqan Agency'}
            </span>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              {t.desc}
            </span>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-background/10 text-center flex justify-center items-center">
          <p className="text-sm font-medium text-gray-500">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}