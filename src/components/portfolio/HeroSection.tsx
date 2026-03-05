import { Mail, Phone, MapPin, Download, Eye } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const badges = ["Full Stack Dev", "Big Data & IA", "Digital Marketing", "Social Impact"];

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none z-10" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-cyan" />
            SYSTÈME ACTIF — PORTFOLIO V1.0
          </div>

          <div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Alicia Lise</span>
              <br />
              <span className="text-secondary text-glow-magenta">Marion</span>
              <br />
              <span className="text-foreground">&gt; OUEDRAOGO</span>
            </h1>
          </div>

          <p className="font-mono text-sm md:text-base text-primary text-glow-cyan">
            Développeuse Full Stack | Big Data & Intelligence Artificielle | Fondatrice sociale | Future experte en stratégie digitale       </p>

          <p className="font-body text-sm text-muted-foreground max-w-md">
           Développeuse full stack spécialisée en Big Data et IA, engagée dans linnovation sociale et la transformation
digitale. Expérience en développement web, stratégie digitale et gestion de projets technologiques à impact.
 </p>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-mono border border-primary/40 text-primary rounded-sm hover:border-primary hover:border-glow-cyan transition-all"
              >
                ✦ {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
  href="#projets"
  onClick={(e) => {
    e.preventDefault(); // empêche le saut instantané
    const section = document.getElementById("projets");
    if (section) section.scrollIntoView({ behavior: "smooth" }); // scroll fluide
  }}
  className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-all rounded-sm"
>
  <Eye className="w-4 h-4" /> Voir mes projets
</a>
            <a href="/#/cv" className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-foreground font-mono text-sm hover:bg-muted/80 transition-all rounded-sm">
              <Download className="w-4 h-4" /> Télécharger CV
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
            <a href="mailto:ouedraogoalicia22@gmail.com" className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm hover:border-primary/50 transition-colors">
              <Mail className="w-3 h-3" /> ouedraogoalicia22@gmail.com
            </a>
           <span className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm">
  <a
    href="https://wa.me/212607681322"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5"
  >
    <Phone className="w-3 h-3" /> +212 0607681322
  </a>
</span>

<span className="flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-sm">
  <a
    href="https://wa.me/22654793512"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5"
  >
    <Phone className="w-3 h-3" /> +226 54793512
  </a>
</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="https://www.linkedin.com/in/alicia-lise-marion-ouedraogo-00aa81326" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-glow-cyan transition-all">LinkedIn</a>
            <a href="https://github.com/Alicia-Ouedraogo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-glow-cyan transition-all">GitHub</a>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="w-3 h-3 text-primary" /> Casablanca, Maroc
            <span className="text-border">|</span>
            <MapPin className="w-3 h-3 text-secondary" /> Ouagadougou, Burkina Faso
          </div>
        </div>

        {/* Right - Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Corner brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-secondary" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-secondary" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary" />
            
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 border-glow-cyan">
              <img src={heroPortrait} alt="Alicia OUEDRAOGO" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-background/80 backdrop-blur px-3 py-1 rounded-sm border border-primary/40 text-xs font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-primary" /> DISPONIBLE
            </div>
          </div>
        </div>
      </div>

      {/* Explorer indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary text-xs font-mono z-20">
        EXPLORER
        <div className="w-px h-8 bg-secondary/50" />
        <span className="text-lg">⌄</span>
      </div>
    </section>
  );
};

export default HeroSection;
