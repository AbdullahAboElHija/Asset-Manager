import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title: { en: string; ar: string; he: string };
  description: { en: string; ar: string; he: string };
  path?: string;
}

/**
 * Dynamically updates document title & meta tags per page/language.
 * Call once at the top of each page component.
 */
export function SEOHead({ title, description, path = '/' }: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const t = title[language];
    const d = description[language];
    const canonicalUrl = `https://itqanaiagency.com${path}`;

    // Update document title
    document.title = t;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) {
      metaDesc.content = d;
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = d;
      document.head.appendChild(metaDesc);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = t;

    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.content = d;

    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) ogUrl.content = canonicalUrl;

    // Update Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (twTitle) twTitle.content = t;

    const twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (twDesc) twDesc.content = d;
  }, [language, title, description, path]);

  return null;
}
