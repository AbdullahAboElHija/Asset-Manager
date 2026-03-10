import { Button } from "@/components/ui/button";
import MainLogo from "@assets/MainLogo_1773168455665.png";

export function Navbar() {
  return (
    <nav className="border-b-4 border-foreground bg-background py-4 sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={MainLogo} alt="Itqan Agency Logo" className="h-full object-contain" />
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="font-extrabold uppercase tracking-tight text-xl leading-none mb-1">Itqan Agency</span>
            <div className="flex gap-3">
              <span className="font-ar font-bold text-base leading-none text-primary">إتقان</span>
              <span className="w-1 h-1 rounded-full bg-foreground my-auto"></span>
              <span className="font-he font-bold text-base leading-none text-primary">איתקאן</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <Button variant="primary" className="hidden sm:inline-flex">
          Free Consultation
        </Button>
      </div>
    </nav>
  );
}