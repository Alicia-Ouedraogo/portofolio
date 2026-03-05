const experiences = [
  {
    active: true,
    title: "Assistante IT et Communication",
    company: "CGX Morocco",
    location: "Casablanca – Hybride",
    period: "Jan 2026 – Présent",
    tasks: [
      "Gestion des réseaux et support IT",
      "Création de contenu audiovisuel",
      "Participation à la stratégie digitale",
      "Développement web",
      "Travail hybride (2/3 distance, 1/3 présentiel)",
    ],
  },
  {
    title: "Stagiaire Développeuse",
    company: "Agence Urbaine de Settat – Ministère de l'Urbanisme",
    location: "Maroc",
    period: "Avril – Juin 2025",
    tasks: [
      "Développement d'une application de gestion du parc automobile",
      "Création d'interfaces web professionnelles",
      "Projet complet noté 18/20",
    ],
  },
  {
    title: "Développeuse Front-End",
    company: "REM Waste – Royaume-Uni (freelance)",
    location: "Remote",
    period: "Juillet 2025",
    tasks: [
      "Développement d'un site de réservation via API",
      "Application React responsive",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_04 // EXPERIENCE</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Expériences Professionnelles</h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  {exp.active && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-sm mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> ACTIF
                    </span>
                  )}
                  <h3 className="font-display text-sm font-semibold text-foreground">{exp.title}</h3>
                  <div className="text-xs font-mono text-secondary">{exp.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-muted-foreground">{exp.location}</div>
                  <div className="text-xs font-mono text-primary">{exp.period}</div>
                </div>
              </div>
              <ul className="space-y-1">
                {exp.tasks.map((t, j) => (
                  <li key={j} className="text-xs font-body text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
