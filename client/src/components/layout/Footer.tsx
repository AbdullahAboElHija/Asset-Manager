export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-8 border-primary py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-extrabold uppercase tracking-tight text-2xl">Itqan Agency</span>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Software House | AI Agency</span>
          </div>

          <div className="text-center md:text-right font-ar">
            <span className="font-bold text-3xl block mb-2">إتقان</span>
            <span className="text-sm font-medium text-gray-400">إتقان برمجيات ذكاء اصطناعي</span>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-background/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Itqan Agency. Strict Geometry. Zero Fluff.
          </p>
          <p className="text-sm font-medium text-gray-500 font-ar">
            جميع الحقوق محفوظة © {new Date().getFullYear()} وكالة إتقان
          </p>
        </div>
      </div>
    </footer>
  );
}