const initiatives = [
  {
    title: "Lise Group – Association humanitaire",
    role: "Fondatrice et Directrice",
    location: "Burkina Faso",
    period: "2023 – Présent",
    tasks: [
      "Organisation de 50+ activités humanitaires",
      "Soutien aux orphelins et déplacés internes",
      "Formation au leadership des jeunes",
      "Organisation d'événements à fort impact",
      "Encadrement et mentorat",
    ],
  },
  {
    title: "Fellowship by Lise Group",
    role: "Fondatrice",
    location: "Burkina Faso",
    period: "2025",
    tasks: ["Formation leadership et soft skills", "Mise en réseau de jeunes leaders"],
  },
  {
    title: "Association CPGE Burkina",
    role: "Coordinatrice des classes préparatoires de la sous-région",
    location: "Burkina Faso",
    period: "2023 – 2024",
    tasks: ["Coordination des activités de l'association", "Accompagnement des étudiants en classes préparatoires"],
  },
  {
    title: "Club Jeunes Filles Leaders Burkina – Section Maroc",
    role: "Vice-Présidente – Section Maroc",
    location: "Casablanca",
    period: "2025 – 2026",
    tasks: ["Leadership féminin et engagement citoyen", "Mise en réseau de jeunes femmes leaders"],
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_06 // LEADERSHIP</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Leadership & Initiatives</h2>

        <blockquote className="border-l-2 border-secondary pl-4 my-8">
          <p className="font-body text-sm text-foreground/80 italic">
            "Leadership n'est pas une position. C'est l'architecture de l'influence."
          </p>
          <cite className="text-xs font-mono text-secondary mt-2 block">— ALICIA OUEDRAOGO</cite>
        </blockquote>

        <div className="grid md:grid-cols-2 gap-4">
          {initiatives.map((init, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-5 hover:border-secondary/40 transition-all">
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{init.title}</h3>
              <div className="text-xs font-mono text-secondary mb-1">{init.role}</div>
              <div className="text-xs font-mono text-muted-foreground mb-3">
                {init.location} | {init.period}
              </div>
              <ul className="space-y-1">
                {init.tasks.map((t, j) => (
                  <li key={j} className="text-xs font-body text-muted-foreground flex items-start gap-2">
                    <span className="text-secondary mt-0.5">▸</span> {t}
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

export default LeadershipSection;
