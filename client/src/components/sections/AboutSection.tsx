export function AboutSection() {
  return (
    <section className="py-24 border-b-4 border-foreground bg-foreground text-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border-4 border-primary">
            
            {/* English Side */}
            <div className="p-12 lg:p-16 lg:border-r-4 border-primary">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Hybrid Model</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-8">
                Enterprise <br /> Architecture. <br /> Agile Innovation.
              </h3>
              <div className="space-y-6 text-lg font-medium text-gray-300">
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
            <div className="p-12 lg:p-16 text-right font-ar bg-primary text-primary-foreground">
              <h2 className="text-sm font-bold text-background uppercase tracking-widest mb-4">النموذج الهجين</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                بنية مؤسسية.<br /> ابتكار مرن.
              </h3>
              <div className="space-y-6 text-xl font-medium text-white/90">
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

          </div>
        </div>
      </div>
    </section>
  );
}