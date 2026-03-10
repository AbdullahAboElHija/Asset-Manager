import { Button } from "@/components/ui/button";
import MainLogo from "@assets/OnlyLogo-Photoroom_1773170349439.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export function Navbar() {
  const { language, setLanguage } = useLanguage();

  const navLinks = {
    en: { home: "Home", works: "Our Works", admin: "Admin", cta: "Free Consultation" },
    ar: { home: "الرئيسية", works: "أعمالنا", admin: "الإدارة", cta: "استشارة مجانية" },
    he: { home: "בית", works: "עבודות", admin: "ניהול", cta: "ייעוץ חינם" }
  };

  const t = navLinks[language];

  return (
    <nav className="border-b-4 border-foreground bg-background py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/">
          <a className="flex items-center gap-4 cursor-pointer group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img src={MainLogo} alt="Itqan Agency Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-extrabold uppercase tracking-tight text-xl leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>Itqan Agency</span>
            </div>
          </a>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wide">
          <Link href="/"><a className="hover:text-primary transition-colors">{t.home}</a></Link>
          <Link href="/portfolio"><a className="hover:text-primary transition-colors">{t.works}</a></Link>
          <Link href="/admin"><a className="hover:text-primary transition-colors text-muted-foreground">{t.admin}</a></Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex border-2 border-foreground font-bold" dir="ltr">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 transition-colors ${language === 'en' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 border-x-2 border-foreground transition-colors font-ar ${language === 'ar' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              عربي
            </button>
            <button 
              onClick={() => setLanguage('he')}
              className={`px-3 py-1 transition-colors font-he ${language === 'he' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              עב
            </button>
          </div>

          <Button variant="primary" className="hidden sm:inline-flex text-lg">
            {t.cta}
          </Button>
        </div>
      </div>
    </nav>
  );
}