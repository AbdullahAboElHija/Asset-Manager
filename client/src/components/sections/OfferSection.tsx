import { Button } from "@/components/ui/button";

export function OfferSection() {
  return (
    <section className="py-32 border-b-4 border-foreground bg-foreground text-background relative overflow-hidden">
      {/* Strict geometry background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto border-4 border-primary bg-foreground p-8 md:p-16 text-center">
          
          <div className="inline-block border-2 border-primary text-primary px-6 py-2 font-bold text-sm tracking-widest uppercase mb-8">
            Founding Client Partnership
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <h2 className="text-6xl md:text-8xl font-extrabold text-primary">75%</h2>
            <div className="w-full md:w-px h-px md:h-24 bg-primary/30"></div>
            <div className="text-left max-w-sm">
              <h3 className="text-2xl font-bold uppercase mb-2">Special Launch Offer</h3>
              <p className="text-gray-400 font-medium">Exclusive discount on the first 3 projects we take on. Premium services at a fraction of the cost.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 font-ar" dir="rtl">
            <h2 className="text-6xl md:text-8xl font-bold text-primary">75%</h2>
            <div className="w-full md:w-px h-px md:h-24 bg-primary/30"></div>
            <div className="text-right max-w-sm">
              <h3 className="text-3xl font-bold mb-2">عرض الإطلاق الخاص</h3>
              <p className="text-gray-400 font-medium text-lg">خصم حصري على أول 3 مشاريع نستلمها. خدمات متميزة بجزء بسيط من التكلفة.</p>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-foreground">
            <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-6 h-auto" variant="primary">
              <span className="mr-4">Claim 1 of 3 Spots</span>
              <span className="font-ar font-bold text-2xl border-l-2 border-primary-foreground/30 pl-4 ml-4">احجز مقعدك</span>
            </Button>
            <p className="mt-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
              Only for visionary businesses ready to scale.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}