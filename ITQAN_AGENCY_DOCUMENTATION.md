# Itqan Agency — Full Website Documentation

## 1. Project Overview

**Itqan Agency** is a trilingual (English, Arabic, Hebrew) marketing landing page and portfolio website for a Software House & AI Agency. The site features a strict geometric design system, a public landing page, a portfolio page with real project data, and a password-protected admin panel for managing portfolio projects.

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 7 + TypeScript |
| Styling | Tailwind CSS v4 (with `@theme inline`) |
| Routing | wouter |
| State/Data | TanStack React Query |
| Backend | Express.js 5 (REST API) |
| Database | MongoDB Atlas (Mongoose ODM) |
| Icons | Lucide React |
| UI Components | Custom Shadcn/ui (adapted for strict geometry) |

---

## 3. Design System

### 3.1 Brand Colors

| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| Primary | `221 83% 53%` | `#2563EB` | Electric Blue — CTAs, accents, links |
| Foreground | `224 50% 9%` | `#0B1121` | Midnight Black — text, borders |
| Background | `0 0% 100%` | `#FFFFFF` | Pure White — page background |
| Muted | `210 40% 96.1%` | `#F1F5F9` | Light grey — subtle backgrounds |
| Muted Foreground | `215.4 16.3% 46.9%` | `#64748B` | Subdued text |
| Destructive | `0 84.2% 60.2%` | `#EF4444` | Red — delete actions, errors |

### 3.2 Typography

| Language | Font | CSS Class |
|----------|------|-----------|
| English | Inter | (default sans-serif) |
| Arabic | Cairo | `.font-ar` |
| Hebrew | Heebo | `.font-he` |

- Headings: `font-extrabold`, `uppercase`, `tracking-tight`
- Body: `font-medium`
- Labels: `font-bold`, `uppercase`, `tracking-wide`

### 3.3 Strict Geometry Rules

- **Border Radius:** `0rem` on all elements — no rounded corners anywhere
- **Shadows:** All shadows disabled (`none`) — completely flat design
- **Borders:** Thick, visible borders are the primary visual element
  - Section dividers: `border-b-4 border-foreground`
  - Cards/containers: `border-4 border-foreground`
  - Buttons: `border-2`
- **No gradients** — solid colors only
- **High contrast** — Black/White/Blue palette exclusively

### 3.4 Interactive States

- Cards: `hover:bg-foreground hover:text-background` (color inversion)
- Buttons: `hover:bg-secondary` (switches from blue to black)
- Images: `grayscale group-hover:grayscale-0` (B&W to color on hover)
- Transitions: `transition-colors duration-300`

---

## 4. Pages & Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with all marketing sections |
| `/portfolio` | Portfolio | Public grid of projects from database |
| `/admin` | Admin | Password-protected project management dashboard |
| `*` | Not Found | 404 error page |

---

## 5. Landing Page Sections

### 5.1 Navbar
- Sticky top navigation with logo + "Itqan Agency" text
- Links: Home, Our Works (Portfolio)
- Language switcher: EN / عربي / עב
- CTA button: "Free Consultation" (scrolls to Contact section)
- Mobile: Hamburger menu with full navigation
- Admin panel (`/admin`) is intentionally NOT linked in the nav

### 5.2 Hero Section
Full-width hero with abstract geometric background elements (skewed rectangles at low opacity).

| Key | English | Arabic | Hebrew |
|-----|---------|--------|--------|
| Badge | Digital Mastery | إتقان رقمي | מומחיות דיגיטלית |
| Title | Flawless Execution. | تنفيذ متقن. | ביצוע מושלם. |
| Description | We build intelligent software and AI-driven solutions to scale businesses with strict geometry and zero compromises. | نبني برمجيات ذكية وحلولاً مدعومة بالذكاء الاصطناعي لتوسيع نطاق الأعمال بهندسة دقيقة وبلا تنازلات. | אנו בונים תוכנה חכמה ופתרונות מבוססי בינה מלאכותית להרחבת עסקים עם גיאומטריה מדויקת וללא פשרות. |
| CTA | Claim Launch Offer | احصل على العرض الحصري | קבל הצעת השקה |

### 5.3 Services Section
Three-column grid of core services.

| Service | Icon | English | Arabic | Hebrew |
|---------|------|---------|--------|--------|
| AI Automation | Bot | Streamlining operations through intelligent workflows. We implement autonomous systems that eliminate manual bottlenecks. | تبسيط العمليات من خلال مسارات عمل ذكية. نحن ننفذ أنظمة مستقلة تقضي على الاختناقات اليدوية. | ייעול תהליכים באמצעות זרימות עבודה חכמות. אנו מיישמים מערכות אוטונומיות המבטלות צווארי בקבוק ידניים. |
| Web Development | Code2 | Building scalable web apps with rigid architecture. Engineered for high performance and absolute reliability. | بناء تطبيقات ويب قابلة للتطوير ببنية صلبة. مصممة لأداء عالٍ وموثوقية مطلقة. | בניית יישומי אינטרנט ברי הרחבה בארכיטקטורה קשיחה. מהונדסים לביצועים גבוהים ואמינות מוחלטת. |
| Data Solutions | Database | Extracting actionable insights from complex datasets. We turn raw information into strategic business leverage. | استخراج رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة. نحول المعلومات الخام إلى نفوذ أعمال استراتيجي. | הפקת תובנות מעשיות ממאגרי נתונים מורכבים. אנו הופכים מידע גולמי למינוף עסקי אסטרטגי. |

### 5.4 About Section
Dark-themed section highlighting the "Hybrid Model."

| Key | English | Arabic | Hebrew |
|-----|---------|--------|--------|
| Badge | The Hybrid Model | النموذج الهجين | המודל ההיברידי |
| Title | Enterprise Architecture. Agile Innovation. | بنية مؤسسية. ابتكار مرن. | ארכיטקטורה ארגונית. חדשנות זריזה. |
| P1 | We operate as a flat vector for your business. By cutting out unnecessary agency bloat, we deliver unparalleled efficiency. | نحن نعمل كمتجه مسطح لعملك. من خلال التخلص من تعقيدات الوكالات التقليدية، نقدم كفاءة لا مثيل لها. | אנו פועלים כווקטור שטוח עבור העסק שלך. על ידי חיתוך סרבול מיותר של סוכנויות, אנו מספקים יעילות שאין שניה לה. |
| P2 | Our projects are structurally sound, architected by seasoned senior tech experts, and rapidly executed by top-tier university graduates. | مشاريعنا مبنية بهيكلية صلبة، يصممها خبراء تقنيون متمرسون، وينفذها بسرعة خريجو جامعات من النخبة. | הפרויקטים שלנו מבוססים מבחינה מבנית, מתוכננים על ידי מומחי טכנולוגיה בכירים ומבוצעים במהירות על ידי בוגרי אוניברסיטאות. |
| P3 | No complex hierarchies. Just pure, precise execution. | لا توجد تسلسلات هرمية معقدة. فقط تنفيذ نقي ودقيق. | ללא היררכיות מורכבות. רק ביצוע טהור ומדויק. |

### 5.5 Value Proposition Section
Three pillars explaining "Why Choose Itqan?"

| Pillar | English | Arabic | Hebrew |
|--------|---------|--------|--------|
| **Mastery & Precision** | Flawless code and AI implementation with strict geometry. We do not do messy workarounds. | كود خالٍ من العيوب وتنفيذ دقيق للذكاء الاصطناعي. نحن لا نقبل بالحلول المؤقتة الفوضوية. | קוד ללא רבב ויישום בינה מלאכותית עם גיאומטריה קפדנית. אנחנו לא עושים מעקפים מבולגנים. |
| **The Hybrid Advantage** | Veteran leadership combining enterprise experience with brilliant, agile emerging talent. | قيادة مخضرمة تجمع بين الخبرة المؤسسية والمواهب الناشئة الذكية والمرنة. | מנהיגות ותיקה המשלבת ניסיון ארגוני עם כישרון עולה מבריק וזריז. |
| **Transparent Execution** | No smoke and mirrors. Just clear, future-proof AI and software solutions built for scale. | لا يوجد خداع أو إخفاء. فقط حلول ذكاء اصطناعي وبرمجيات واضحة ومستقبلية مصممة للتوسع. | ללא עשן ומראות. רק פתרונות בינה מלאכותית ותוכנה ברורים ומוכנים לעתיד שנבנו להתרחבות. |

### 5.6 Offer Section
High-impact section with a **75% discount** for founding clients.

| Key | English | Arabic | Hebrew |
|-----|---------|--------|--------|
| Badge | Founding Client Partnership | شراكة العميل المؤسس | שותפות לקוח מייסד |
| Title | Special Launch Offer | عرض الإطلاق الخاص | הצעת השקה מיוחדת |
| Description | Exclusive discount on the first 3 projects we take on. Premium services at a fraction of the cost. | خصم حصري على أول 3 مشاريع نستلمها. خدمات متميزة بجزء بسيط من التكلفة. | הנחה בלעדית על 3 הפרויקטים הראשונים שניקח. שירותי פרימיום בשבריר מהעלות. |
| CTA | Claim 1 of 3 Spots | احجز مقعدك | תפוס מקום 1 מתוך 3 |
| Footnote | Only for visionary businesses ready to scale. | فقط للشركات ذات الرؤية المستقبلية المستعدة للتوسع. | רק לעסקים בעלי חזון המוכנים לצמוח. |

### 5.7 Contact Section
Lead generation form (id="contact" — all CTAs scroll here).

| Key | English | Arabic | Hebrew |
|-----|---------|--------|--------|
| Title | Start Your Project | ابدأ مشروعك | התחל את הפרויקט שלך |
| Subtitle | Book a Free Consultation to explore AI or custom software solutions. | احجز استشارة مجانية لاستكشاف حلول الذكاء الاصطناعي أو البرمجيات المخصصة. | קבע ייעוץ חינם כדי לחקור פתרונות בינה מלאכותית או תוכנה מותאמים אישית. |
| Name Field | Name | الاسم | שם |
| Email Field | Business Email | البريد الإلكتروني للعمل | אימייל עסקי |
| Type Field | Project Type | نوع المشروع | סוג פרויקט |
| Options | AI Automation, Web Development, Data Solutions, Other | أتمتة الذكاء الاصطناعي، تطوير الويب، حلول البيانات، أخرى | אוטומציית בינה מלאכותית, פיתוח אתרים, פתרונות נתונים, אחר |
| CTA | Request Consultation | اطلب استشارة | בקש ייעוץ |

### 5.8 Footer
- Agency name: "Itqan Agency"
- Tagline: "Software House | AI Agency" (localized)
- Copyright with "Strict Geometry" tagline

---

## 6. Navbar Content (All Languages)

| Key | English | Arabic | Hebrew |
|-----|---------|--------|--------|
| Home | Home | الرئيسية | בית |
| Our Works | Our Works | أعمالنا | העבודות שלנו |
| CTA | Free Consultation | استشارة مجانية | ייעוץ חינם |

---

## 7. Portfolio Page

- Displays projects in a responsive grid (1/2/3 columns)
- Each project card shows: image (grayscale, color on hover), category badge, title, description
- All content is language-aware (displays the correct title/description for the selected language)
- Data fetched from `GET /api/projects`

---

## 8. Admin Panel

- Accessible at `/admin` (NOT linked in public navigation)
- Password-protected with login form
- Authentication uses Bearer token stored in `sessionStorage`
- CRUD operations for portfolio projects:
  - **Create:** Add new project with trilingual titles/descriptions, category, image URL, sort order
  - **Edit:** Inline editing form for existing projects
  - **Delete:** With confirmation dialog
- Categories: Web Development, AI Automation, Data Solutions

---

## 9. Database Schema

### Projects Collection (MongoDB)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_id` | ObjectId | auto | MongoDB auto-generated ID |
| `titleEn` | String | yes | Project title in English |
| `titleAr` | String | yes | Project title in Arabic |
| `titleHe` | String | yes | Project title in Hebrew |
| `descEn` | String | yes | Description in English |
| `descAr` | String | yes | Description in Arabic |
| `descHe` | String | yes | Description in Hebrew |
| `category` | String | yes | Project category |
| `imageUrl` | String | yes | URL to project image |
| `sortOrder` | Number | yes | Display order (ascending), default: 0 |

---

## 10. API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/projects` | Public | List all projects (sorted by sortOrder) |
| `POST` | `/api/admin/login` | Public | Verify admin password |
| `POST` | `/api/projects` | Admin | Create a new project |
| `PATCH` | `/api/projects/:id` | Admin | Update an existing project |
| `DELETE` | `/api/projects/:id` | Admin | Delete a project |

Admin endpoints require `Authorization: Bearer <password>` header.

---

## 11. Environment Variables

| Variable | Purpose |
|----------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `ADMIN_PASSWORD` | Password for the admin panel |

---

## 12. File Structure

```
client/
  src/
    components/
      layout/
        Navbar.tsx          — Sticky nav with language switcher
        Footer.tsx          — Site footer
      sections/
        HeroSection.tsx     — Hero with CTA
        ServicesSection.tsx  — 3 service cards
        AboutSection.tsx    — Hybrid model section
        ValuePropSection.tsx — Why choose Itqan
        OfferSection.tsx    — 75% launch offer
        ContactSection.tsx  — Lead form
      ui/                   — Shadcn components (button, card, input, etc.)
    contexts/
      LanguageContext.tsx    — Language state (EN/AR/HE) + RTL/LTR
    lib/
      api.ts                — Admin auth helpers
    pages/
      Home.tsx              — Landing page
      Portfolio.tsx         — Project gallery
      Admin.tsx             — Admin dashboard
      not-found.tsx         — 404 page
    App.tsx                 — Router setup
    main.tsx                — App entry point
    index.css               — Tailwind v4 theme + design tokens
  index.html                — HTML template with meta tags
server/
  index.ts                  — Express server entry
  db.ts                     — Mongoose connection + Project model
  storage.ts                — DatabaseStorage class (CRUD)
  routes.ts                 — API routes + admin middleware
  vite.ts                   — Vite dev middleware
shared/
  schema.ts                 — Zod schemas + TypeScript types
```

---

## 13. Language System

- Context provider wraps the entire app (`LanguageContext`)
- Stores selected language in state: `'en'` | `'ar'` | `'he'`
- Automatically sets `document.documentElement.dir` to `'rtl'` for Arabic/Hebrew, `'ltr'` for English
- Automatically sets font class on `<html>`: `font-ar` or `font-he`
- Every section component uses `useLanguage()` hook and renders content based on selected language

---

## 14. CTA Flow

All call-to-action buttons across the site scroll to the Contact section:
1. **Navbar "Free Consultation"** — smooth scrolls to `#contact`, or navigates to `/#contact` from other pages
2. **Hero "Claim Launch Offer"** — smooth scrolls to `#contact`
3. **Offer "Claim 1 of 3 Spots"** — smooth scrolls to `#contact`

---

## 15. Deployment

- **Development:** Runs on Replit with `npm run dev` (Express serves Vite dev server)
- **Vercel:** Full deployment guide available in `.agents/skills/vercel-deployment/SKILL.md`
  - Frontend: Vite build output served as static files
  - Backend: Express wrapped as Vercel serverless function
  - Requires `MONGODB_URI` and `ADMIN_PASSWORD` environment variables in Vercel dashboard
  - MongoDB Atlas must whitelist `0.0.0.0/0` for cloud access

---

## 16. Logo

- File: `attached_assets/OnlyLogo-Photoroom_1773170349439.png`
- Displayed in Navbar with "Itqan Agency" text beside it on desktop
- Logo only (no text) on mobile
