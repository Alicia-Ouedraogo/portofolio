const educations = [
  {
    period: "2025 – 2026",
    school: "ITSUP Casablanca",
    location: "Casablanca, Maroc",
    degree: "Master 1 Big Data et IA",
    description: "Formation avancée en traitement de données massives et intelligence artificielle appliquée.",
    tags: ["Big Data", "Intelligence Artificielle", "Data Science", "Machine Learning"],
  },
  {
    period: "En cours",
    school: "Université de Sfax, Tunisie",
    location: "Sfax, Tunisie",
    degree: "Master Recherche en Data Science",
    description: "Projet académique de recherche approfondie en science des données.",
    tags: ["Recherche", "Data Science", "Analyse avancée"],
  },
  {
    period: "2024 – 2025",
    school: "ESRIM – École Supérieure des Réseaux Informatiques et Management",
    location: "Settat, Maroc",
    degree: "Licence – Développement d'Applications Digitales et Informatiques",
    description: "Formation complète en développement fullstack et architecture logicielle.",
    tags: ["Développement Fullstack", "Informatique générale", "Backend / Frontend", "Architecture logicielle"],
    mention: "Mention Très Bien",
  },
  {
    period: "2020 – 2022",
    school: "Université Scientifique du Burkina (CPGE MENAPLN)",
    location: "Ouagadougou, Burkina Faso",
    degree: "Classes Préparatoires aux Grandes Écoles – MP",
    description: "Formation scientifique rigoureuse orientée résolution de problèmes complexes.",
    tags: ["Mathématiques", "Physique", "Sciences de l'ingénieur"],
  },
  {
    period: "2021 – 2022",
    school: "Complexe Scolaire Monseigneur André Dupont",
    location: "Ouagadougou, Burkina Faso",
    degree: "Baccalauréat Scientifique Série D",
    description: "",
    tags: [],
    mention: "Mention Très Bien",
  },
];

const EducationSection = () => {
  return (
    <section id="formation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_03 // EDUCATION</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Parcours Académique</h2>

        <div className="relative border-l border-primary/30 ml-4 space-y-8">
          {educations.map((edu, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background -translate-x-[6px]" />
              <div className="text-xs font-mono text-secondary mb-1">{edu.period}</div>
              <h3 className="font-display text-sm font-semibold text-foreground">{edu.school}</h3>
              <div className="text-xs font-mono text-muted-foreground mb-1">{edu.location}</div>
              <div className="text-sm font-body text-primary mb-1">{edu.degree}</div>
              {edu.description && <p className="text-xs font-body text-muted-foreground mb-2">{edu.description}</p>}
              {edu.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-1">
                  {edu.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-border text-muted-foreground rounded-sm">{t}</span>
                  ))}
                </div>
              )}
              {edu.mention && (
                <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary border border-primary/30 rounded-sm">
                  {edu.mention}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
