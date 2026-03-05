const visionItems = [
  "Promotion de l'image du Burkina Faso",
  "Valorisation des produits locaux",
  "Création d'écosystèmes digitaux",
  "Autonomisation des jeunes et des femmes",
  "Transformation numérique africaine",
  "Innovation sociale à impact durable",
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_07 // VISION</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Impact & Vision</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {visionItems.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-5 text-center hover:border-primary/40 transition-all group">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-display text-xs">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-body text-foreground/80">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="font-body text-base md:text-lg text-primary text-glow-cyan italic max-w-xl mx-auto">
            "Construire des ponts numériques entre l'Afrique et le monde, un projet à la fois."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
