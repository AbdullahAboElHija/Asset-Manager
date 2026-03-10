import { Button } from "@/components/ui/button";

export function OfferSection() {
  return (
    <section className="py-32 border-b-4 border-foreground bg-foreground text-background relative overflow-hidden">
      {/* Strict geometry background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto border-4 border-primary bg-foreground p-8 md:p-12 lg:p-16 text-center">
          
          <div className="inline-flex flex-wrap justify-center items-center gap-4 border-2 border-primary text-primary px-6 py-2 font-bold text-sm tracking-widest uppercase mb-12 bg-foreground relative z-20">
            <span>Founding Client</span>
            <span className="hidden sm:inline">|</span>
            <span className="font-ar">العميل المؤسس</span>
            <span className="hidden sm:inline">|</span>
            <span className="font-he">לקוח מייסד</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center justify-center mb-12">
            
            <div className="text-center lg:text-left space-y-2 order-2 lg:order-1">
              <h3 className="text-2xl font-bold uppercase text-white">Special Launch Offer</h3>
              <p className="text-gray-400 font-medium">Exclusive discount on the first 3 projects we take on. Premium services at a fraction of the cost.</p>
            </div>

            <div className="flex justify-center lg:border-x-2 border-primary/30 py-8 lg:py-0 order-1 lg:order-2">
              <h2 className="text-7xl lg:text-8xl font-extrabold text-primary">75%</h2>
            </div>

            <div className="text-center lg:text-right space-y-8 order-3 lg:order-3">
              <div className="font-ar" dir="rtl">
                <h3 className="text-2xl font-bold mb-2 text-white">عرض الإطلاق الخاص</h3>
                <p className="text-gray-400 font-medium">خصم حصري على أول 3 مشاريع نستلمها. خدمات متميزة بجزء بسيط من التكلفة.</p>
              </div>
              <div className="font-he" dir="rtl">
                <h3 className="text-2xl font-bold mb-2 text-white">הצעת השקה מיוחדת</h3>
                <p className="text-gray-400 font-medium">הנחה בלעדית על 3 הפרויקטים הראשונים שניקח. שירותי פרימיום בשבריר מהעלות.</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t-2 border-foreground/50">
            <Button size="lg" className="w-full lg:w-auto text-xl px-8 py-6 h-auto flex-col sm:flex-row gap-4" variant="primary">
              <span className="font-bold">Claim 1 of 3 Spots</span>
              <span className="hidden sm:inline border-l-2 border-primary-foreground/30 h-6"></span>
              <span className="font-ar font-bold text-2xl">احجز مقعدك</span>
              <span className="hidden sm:inline border-l-2 border-primary-foreground/30 h-6"></span>
              <span className="font-he font-bold text-2xl">תפוס מקום 1 מתוך 3</span>
            </Button>
            <p className="mt-6 text-sm text-gray-500 font-medium uppercase tracking-wide flex flex-col sm:flex-row gap-2 justify-center">
              <span>Only for visionary businesses.</span>
              <span className="hidden sm:inline">|</span>
              <span className="font-ar">فقط للشركات ذات الرؤية.</span>
              <span className="hidden sm:inline">|</span>
              <span className="font-he">רק לעסקים בעלי חזון.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}