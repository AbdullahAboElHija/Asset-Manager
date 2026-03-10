export function AboutSection() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-foreground text-background">
      <div className="container px-4 mx-auto">
        <div className="border-4 border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* English Side */}
            <div className="p-8 lg:p-12 lg:border-r-4 border-b-4 lg:border-b-0 border-primary">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Hybrid Model</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-8">
                Enterprise <br /> Architecture. <br /> Agile Innovation.
              </h3>
              <div className="space-y-6 text-base md:text-lg font-medium text-gray-300">
                <p>
                  We operate as a flat vector for your business. By cutting out unnecessary agency bloat, we deliver unparalleled efficiency.
                </p>
                <p>
                  Our projects are structurally sound, architected by seasoned senior tech experts, and rapidly executed by top-tier university graduates.
                </p>
                <p className="border-l-4 border-primary pl-6 text-white">
                  No complex hierarchies. Just pure, precise execution.
                </p>
              </div>
            </div>

            {/* Arabic Side */}
            <div className="p-8 lg:p-12 text-right font-ar bg-primary text-primary-foreground lg:border-r-4 border-b-4 lg:border-b-0 border-foreground" dir="rtl">
              <h2 className="text-sm font-bold text-background uppercase tracking-widest mb-4">النموذج الهجين</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                بنية مؤسسية.<br /> ابتكار مرن.
              </h3>
              <div className="space-y-6 text-lg md:text-xl font-medium text-white/90">
                <p>
                  نحن نعمل كمتجه مسطح لعملك. من خلال التخلص من تعقيدات الوكالات التقليدية، نقدم كفاءة لا مثيل لها.
                </p>
                <p>
                  مشاريعنا مبنية بهيكلية صلبة، يصممها خبراء تقنيون متمرسون، وينفذها بسرعة خريجو جامعات من النخبة.
                </p>
                <p className="border-r-4 border-background pr-6 text-white font-bold">
                  لا توجد تسلسلات هرمية معقدة. فقط تنفيذ نقي ودقيق.
                </p>
              </div>
            </div>

            {/* Hebrew Side */}
            <div className="p-8 lg:p-12 text-right font-he bg-background text-foreground" dir="rtl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">המודל ההיברידי</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                ארכיטקטורה ארגונית.<br /> חדשנות זריזה.
              </h3>
              <div className="space-y-6 text-lg md:text-xl font-medium text-muted-foreground">
                <p>
                  אנו פועלים כווקטור שטוח עבור העסק שלך. על ידי חיתוך סרבול מיותר של סוכנויות, אנו מספקים יעילות שאין שניה לה.
                </p>
                <p>
                  הפרויקטים שלנו מבוססים מבחינה מבנית, מתוכננים על ידי מומחי טכנולוגיה בכירים ומבוצעים במהירות על ידי בוגרי אוניברסיטאות.
                </p>
                <p className="border-r-4 border-primary pr-6 text-foreground font-bold">
                  ללא היררכיות מורכבות. רק ביצוע טהור ומדויק.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}