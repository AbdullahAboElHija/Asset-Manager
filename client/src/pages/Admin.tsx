import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Edit2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Admin() {
  const { language } = useLanguage();

  const t = {
    en: { 
      title: "Admin Panel", 
      subtitle: "Manage Portfolio Projects",
      addBtn: "Add New Project",
      headers: ["Title", "Category", "Actions"]
    },
    ar: { 
      title: "لوحة التحكم", 
      subtitle: "إدارة مشاريع المعرض",
      addBtn: "إضافة مشروع جديد",
      headers: ["العنوان", "الفئة", "الإجراءات"]
    },
    he: { 
      title: "פאנל ניהול", 
      subtitle: "ניהול פרויקטים בתיק עבודות",
      addBtn: "הוסף פרויקט חדש",
      headers: ["כותרת", "קטגוריה", "פעולות"]
    }
  }[language];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tight">{t.title}</h1>
              <p className="text-muted-foreground font-medium">{t.subtitle}</p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>{t.addBtn}</span>
            </Button>
          </div>

          <div className="bg-background border-4 border-foreground p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="p-4 border-b-4 border-foreground uppercase font-bold">{t.headers[0]}</th>
                  <th className="p-4 border-b-4 border-foreground uppercase font-bold">{t.headers[1]}</th>
                  <th className="p-4 border-b-4 border-foreground uppercase font-bold text-right">{t.headers[2]}</th>
                </tr>
              </thead>
              <tbody>
                {/* Mock Data Row */}
                <tr className="border-b-2 border-foreground/20 hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold">FinTech Dashboard</td>
                  <td className="p-4 font-medium text-muted-foreground">Web Development</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Mock Data Row */}
                <tr className="border-b-2 border-foreground/20 hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold">AI Customer Support Agent</td>
                  <td className="p-4 font-medium text-muted-foreground">AI Automation</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 border-l-4 border-primary pl-4 py-2">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Note: This is a frontend mockup. Backend upgrade required to make operations functional.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}