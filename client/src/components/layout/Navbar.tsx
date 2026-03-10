import { Button } from "@/components/ui/button";
import MainLogo from "@assets/OnlyLogo-Photoroom_1773170349439.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = {
    en: { home: "Home", works: "Our Works", cta: "Free Consultation" },
    ar: { home: "الرئيسية", works: "أعمالنا", cta: "استشارة مجانية" },
    he: { home: "בית", works: "עבודות", cta: "ייעוץ חינם" }
  };

  const t = navLinks[language];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between py-4">
        
        {/* Logo Area */}
        <Link href="/">
          <a className="flex items-center gap-4 cursor-pointer group" onClick={closeMobileMenu}>
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img src={MainLogo} alt="Itqan Agency Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="font-extrabold uppercase tracking-tight text-xl leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>Itqan Agency</span>
            </div>
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wide">
          <Link href="/" className={`hover:text-primary transition-colors ${location === '/' ? 'text-primary' : ''}`}>{t.home}</Link>
          <Link href="/portfolio" className={`hover:text-primary transition-colors ${location === '/portfolio' ? 'text-primary' : ''}`}>{t.works}</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
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

          <Button variant="primary" className="hidden lg:inline-flex text-base h-10 px-6">
            {t.cta}
          </Button>
        </div>

        {/* Mobile Menu Toggle & Language Switcher */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Switcher (Compact) */}
          <div className="flex border-2 border-foreground font-bold text-sm" dir="ltr">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 transition-colors ${language === 'en' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('ar')}
              className={`px-2 py-1 border-x-2 border-foreground transition-colors font-ar ${language === 'ar' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              عربي
            </button>
            <button 
              onClick={() => setLanguage('he')}
              className={`px-2 py-1 transition-colors font-he ${language === 'he' ? 'bg-foreground text-background' : 'hover:bg-muted'}`}
            >
              עב
            </button>
          </div>

          <button 
            className="p-2 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-4 border-foreground bg-background absolute top-full left-0 w-full flex flex-col font-bold uppercase tracking-wide">
          <Link href="/">
            <span className={`p-4 border-b-2 border-foreground/10 hover:bg-muted block cursor-pointer ${location === '/' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>
              {t.home}
            </span>
          </Link>
          <Link href="/portfolio">
            <span className={`p-4 border-b-2 border-foreground/10 hover:bg-muted block cursor-pointer ${location === '/portfolio' ? 'text-primary' : ''}`} onClick={closeMobileMenu}>
              {t.works}
            </span>
          </Link>
          <div className="p-4">
            <Button variant="primary" className="w-full text-base h-12" onClick={closeMobileMenu}>
              {t.cta}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}