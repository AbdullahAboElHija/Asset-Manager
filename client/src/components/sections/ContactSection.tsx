import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">Start Your Project <span className="text-primary px-4">|</span> <span className="font-ar">ابدأ مشروعك</span></h2>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
          <p className="text-muted-foreground font-medium pt-4">
            Book a Free Consultation to explore AI or custom software solutions.
          </p>
        </div>

        <form className="space-y-6 border-4 border-foreground p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground">Name / الاسم</label>
              <input 
                type="text" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground">Business Email / البريد الإلكتروني</label>
              <input 
                type="email" 
                className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wide text-foreground">Project Type / نوع المشروع</label>
            <select className="w-full border-2 border-foreground bg-background p-4 focus:outline-none focus:border-primary transition-colors rounded-none appearance-none cursor-pointer">
              <option>AI Automation / أتمتة الذكاء الاصطناعي</option>
              <option>Web Development / تطوير الويب</option>
              <option>Data Solutions / حلول البيانات</option>
              <option>Other / أخرى</option>
            </select>
          </div>

          <Button type="button" size="lg" className="w-full h-16 text-lg mt-8">
            <span className="mr-4">Request Consultation</span>
            <span className="font-ar font-bold text-xl border-l-2 border-primary-foreground/30 pl-4 ml-4">اطلب استشارة</span>
          </Button>
        </form>
      </div>
    </section>
  );
}