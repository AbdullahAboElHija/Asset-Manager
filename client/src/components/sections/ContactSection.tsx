import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight flex flex-col md:flex-row items-center justify-center gap-4">
            <span>Start Your Project</span> 
            <span className="text-primary hidden md:inline">|</span> 
            <span className="font-ar">ابدأ مشروعك</span>
            <span className="text-primary hidden md:inline">|</span> 
            <span className="font-he">התחל את הפרויקט שלך</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
          <p className="text-muted-foreground font-medium pt-4 max-w-2xl mx-auto">
            Book a Free Consultation to explore AI or custom software solutions. <br />
            <span className="font-ar block mt-2 text-lg" dir="rtl">احجز استشارة مجانية لاستكشاف حلول الذكاء الاصطناعي أو البرمجيات المخصصة.</span>
            <span className="font-he block mt-2 text-lg" dir="rtl">קבע ייעוץ חינם כדי לחקור פתרונות בינה מלאכותית או תוכנה מותאמים אישית.</span>
          </p>
        </div>

        <form className="space-y-6 border-4 border-foreground p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
                Name <span className="font-ar px-1">الاسم</span> <span className="font-he px-1">שם</span>
              </label>
              <input 
                type="text" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
                Email <span className="font-ar px-1">البريد</span> <span className="font-he px-1">אימייל</span>
              </label>
              <input 
                type="email" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wide text-foreground block">
              Project Type <span className="font-ar px-1">نوع المشروع</span> <span className="font-he px-1">סוג פרויקט</span>
            </label>
            <select className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none appearance-none cursor-pointer">
              <option>AI Automation / أتمتة الذكاء الاصطناعي / אוטומציית בינה מלאכותית</option>
              <option>Web Development / تطوير الويب / פיתוח אתרים</option>
              <option>Data Solutions / حلول البيانات / פתרונות נתונים</option>
              <option>Other / أخرى / אחר</option>
            </select>
          </div>

          <Button type="button" size="lg" className="w-full h-auto py-6 text-lg mt-8 flex-col sm:flex-row gap-4">
            <span className="font-bold">Request Consultation</span>
            <span className="hidden sm:inline border-l-2 border-primary-foreground/30 h-6"></span>
            <span className="font-ar font-bold text-xl">اطلب استشارة</span>
            <span className="hidden sm:inline border-l-2 border-primary-foreground/30 h-6"></span>
            <span className="font-he font-bold text-xl">בקש ייעוץ</span>
          </Button>
        </form>
      </div>
    </section>
  );
}