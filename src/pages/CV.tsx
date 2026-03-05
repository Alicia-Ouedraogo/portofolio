import { ArrowLeft, Download } from "lucide-react";

const CV = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Screen-only controls */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <a href="/#accueil" className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-glow-cyan transition-all">
            <ArrowLeft className="w-4 h-4" /> Retour au portfolio
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary text-xs font-mono hover:bg-primary/10 transition-all rounded-sm"
          >
            <Download className="w-4 h-4" /> Télécharger PDF
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-6 pt-20 pb-12 print:pt-0 print:pb-0 print:max-w-none">
        {/* Header */}
        <header className="mb-8 border-b border-border pb-6 print:border-muted">
          <h1 className="font-display text-3xl font-bold mb-1">Alicia Lise Marion OUEDRAOGO</h1>
          <p className="text-sm font-mono text-primary mb-3">Digital Strategist | Data Scientist | Leadership Architect</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
            <span>ouedraogoalicia22@gmail.com</span>
            <span>+212 0607681322</span>
            <span>+226 54793512</span>
            <span>Casablanca, Maroc / Ouagadougou, Burkina Faso</span>
          </div>
          <div className="flex gap-4 mt-2 text-xs font-mono text-primary">
            <span>linkedin.com/in/alicia-lise-marion-ouedraogo-00aa81326</span>
            <span>github.com/Alicia-Ouedraogo</span>
          </div>
        </header>

        {/* Profil */}
        <section className="mb-6">
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Profil</h2>
          <p className="text-sm font-body text-muted-foreground leading-relaxed">
            Développeuse full stack spécialisée en Big Data et IA, stratège digitale et leader engagée dans l'innovation sociale et la transformation numérique africaine. Expérience en développement web, marketing digital, gestion de projets technologiques à impact et encadrement de communautés.
          </p>
        </section>

        {/* Formation */}
        <section className="mb-6">
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Formation</h2>
          <div className="space-y-3">
            {[
              { period: "2025 – 2026", school: "ITSUP Casablanca", degree: "Master 1 Big Data et IA" },
              { period: "2024 – 2025", school: "ESRIM – Settat", degree: "Licence Développement d'Applications Digitales et Informatiques – Mention Très Bien" },
              { period: "2020 – 2022", school: "Université Scientifique du Burkina (CPGE)", degree: "Classes Préparatoires MP" },
              { period: "2021 – 2022", school: "Complexe Scolaire Mgr André Dupont", degree: "Baccalauréat Scientifique Série D – Mention Bien" },
            ].map((e, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-xs font-mono text-secondary whitespace-nowrap w-24 flex-shrink-0">{e.period}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{e.degree}</div>
                  <div className="text-xs font-mono text-muted-foreground">{e.school}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expériences */}
        <section className="mb-6">
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Expériences Professionnelles</h2>
          <div className="space-y-4">
            {[
              {
                period: "Jan 2026 – Présent",
                title: "Assistante IT et Communication",
                company: "CGX Morocco – Casablanca",
                tasks: ["Gestion des réseaux et support IT", "Création de contenu audiovisuel", "Stratégie digitale et développement web"],
              },
              {
                period: "Avr – Juin 2025",
                title: "Stagiaire Développeuse",
                company: "Agence Urbaine de Settat – Ministère de l'Urbanisme",
                tasks: ["Application de gestion du parc automobile (Flutter/Laravel)", "Projet noté 18/20"],
              },
              {
                period: "Juillet 2025",
                title: "Développeuse Front-End (Freelance)",
                company: "REM Waste – Royaume-Uni",
                tasks: ["Site de réservation via API – React responsive"],
              },
            ].map((e, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-xs font-mono text-secondary whitespace-nowrap w-28 flex-shrink-0">{e.period}</span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{e.title}</div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">{e.company}</div>
                  <ul className="space-y-0.5">
                    {e.tasks.map((t, j) => (
                      <li key={j} className="text-xs text-muted-foreground">▸ {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compétences */}
        <section className="mb-6">
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Compétences</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-body text-muted-foreground">
            <div><span className="text-foreground font-semibold">Tech:</span> React, Flutter, Laravel/PHP, Fullstack</div>
            <div><span className="text-foreground font-semibold">Data:</span> Big Data, IA, Machine Learning, Data Science</div>
            <div><span className="text-foreground font-semibold">Marketing:</span> Community Management, Branding, Meta Business Suite</div>
            <div><span className="text-foreground font-semibold">Design:</span> Figma, Adobe XD, Canva, UI/UX</div>
            <div><span className="text-foreground font-semibold">Management:</span> Agile/Scrum, Gestion de projet, Leadership</div>
            <div><span className="text-foreground font-semibold">Langues:</span> Français (natif), Anglais (intermédiaire)</div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-6">
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Leadership & Engagement</h2>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div><span className="text-foreground font-semibold">Lise Group</span> – Fondatrice & Directrice | 50+ activités humanitaires</div>
            <div><span className="text-foreground font-semibold">Fellowship by Lise Group</span> – Formation leadership et mise en réseau</div>
            <div><span className="text-foreground font-semibold">Club Jeunes Filles Leaders Burkina</span> – Vice-Présidente Section Maroc</div>
            <div><span className="text-foreground font-semibold">Association CPGE Burkina</span> – Coordinatrice</div>
          </div>
        </section>

        {/* Références */}
        <section>
          <h2 className="font-display text-lg font-bold text-primary border-b border-primary/30 pb-1 mb-3">Références</h2>
          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div>
              <div className="text-foreground font-semibold">AIT SAID Mehdi</div>
              <div>Professeur – ESRIM, Settat</div>
              <div>+212 523 402 705</div>
            </div>
            <div>
              <div className="text-foreground font-semibold">GUISSY Abdelaly</div>
              <div>Directeur – ESRIM, Settat</div>
              <div>+212 666 854 185</div>
            </div>
             <div>
              <div className="text-foreground font-semibold"> M.OUEDRAOGO</div>
              <div>Coordonateur des classes prepa MENAPLN-OUAGA, Ouagadougou</div>
              <div>+226 71 86 64 65</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
