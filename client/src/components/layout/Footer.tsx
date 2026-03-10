export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-8 border-primary py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <span className="font-extrabold uppercase tracking-tight text-2xl">Itqan Agency</span>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Software House | AI Agency</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-center">
            <div className="font-ar text-center md:text-right" dir="rtl">
              <span className="font-bold text-2xl block mb-2 text-primary">إتقان</span>
              <span className="text-sm font-medium text-gray-400">إتقان برمجيات | ذكاء اصطناعي</span>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-background/20"></div>

            <div className="font-he text-center md:text-right" dir="rtl">
              <span className="font-bold text-2xl block mb-2 text-primary">איתקאן</span>
              <span className="text-sm font-medium text-gray-400">בית תוכנה | סוכנות בינה מלאכותית</span>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-background/10 text-center flex flex-col gap-4 justify-center items-center">
          <p className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Itqan Agency. Strict Geometry. Zero Fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <p className="text-sm font-medium text-gray-500 font-ar" dir="rtl">
              جميع الحقوق محفوظة © {new Date().getFullYear()} وكالة إتقان
            </p>
            <p className="text-sm font-medium text-gray-500 font-he" dir="rtl">
              כל הזכויות שמורות © {new Date().getFullYear()} סוכנות איתקאן
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}