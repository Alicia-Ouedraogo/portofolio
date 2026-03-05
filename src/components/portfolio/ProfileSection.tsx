const skillCategories = [
  {
    title: "Digital Marketing",
    subtitle: "Brand & Strategy",
    skills: ["Community Management", "Brand Management", "Image & Personal Branding Strategy", "Content Strategy & Scheduling", "Meta Business Suite (maîtrise)", "Social Media Growth Strategy"],
    bars: [{ label: "Infographie", value: 60 }, { label: "Social Media", value: 100 }, { label: "Branding", value: 80 }],
  },
  {
    title: "Tech & Développement",
    subtitle: "Fullstack Engineering",
    prefix: ">ls skills/",
    skills: ["Développement Fullstack (Frontend + Backend)", "Architecture Web & Mobile", "PHP / Flutter / Applications hybrides", "Intelligence Artificielle", "Optimisation réseaux", "Conception d'outils digitaux"],
    bars: [{ label: "Frontend", value: 100 }, { label: "Backend", value: 80 }, { label: "Mobile", value: 80 }],
  },
  {
    title: "Data & Intelligence",
    subtitle: "Big Data & IA",
    skills: ["Master Big Data – ITSUP Casablanca (en cours)", "Data Science (approfondissement)", "Modélisation & Prédiction", "Analyse de données complexes"],
    bars: [{ label: "Data Science", value: 80 }, { label: "Machine Learning", value: 60 }, { label: "Analyse", value: 100 }],
  },
  {
    title: "Design & UX",
    subtitle: "Visual Creation",
    skills: ["Figma – Prototypage & Design System", "Adobe XD – Wireframing", "Canva – Création rapide", "UI/UX Design responsive"],
    bars: [{ label: "UI Design", value: 80 }, { label: "Prototypage", value: 80 }],
  },
  {
    title: "Management",
    subtitle: "Project & Team Lead",
    skills: ["Méthodologie Agile / Scrum", "Leadership & Coordination", "Gestion de projet digitaux", "Business Planning", "Community Management"],
    bars: [{ label: "Leadership", value: 100 }, { label: "Gestion Projet", value: 100 }],
  },
  {
    title: "Langues & Soft Skills",
    subtitle: "Communication",
    skills: ["Français ★★★★★ (natif)", "Anglais ★★★☆☆ (intermédiaire)", "Communication interpersonnelle", "Entrepreneuriat & Innovation", "Mentorat & Encadrement"],
    bars: [{ label: "Français", value: 100 }, { label: "Anglais", value: 60 }],
  },
];

const ProfileSection = () => {
  return (
    <section id="profil" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_02 // STRATEGIC DASHBOARD</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Profil Stratégique Multi-Compétences
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-8 max-w-2xl">
          Un profil hybride combinant Marketing Digital, Ingénierie Tech, Data Science et Leadership à impact social.
        </p>

        <div className="bg-card border border-border rounded-sm p-4 mb-8">
          <div className="text-xs font-mono text-primary mb-2">&gt;cat profil.txt</div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Développeuse full stack spécialisée en Big Data et IA, stratège digitale et leader engagée dans l'innovation sociale et la transformation numérique africaine. Expérience en développement web, marketing digital, gestion de projets technologiques à impact et encadrement de communautés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-all group">
              <h3 className="font-display text-sm font-semibold text-primary mb-1">{cat.title}</h3>
              <p className="text-xs font-mono text-muted-foreground mb-3">{cat.subtitle}</p>
              {cat.prefix && <div className="text-xs font-mono text-primary/60 mb-2">{cat.prefix}</div>}
              <ul className="space-y-1 mb-4">
                {cat.skills.map((s) => (
                  <li key={s} className="text-xs font-body text-muted-foreground">▸ {s}</li>
                ))}
              </ul>
              <div className="space-y-2">
                {cat.bars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                      <span>{bar.value / 20}/5</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
