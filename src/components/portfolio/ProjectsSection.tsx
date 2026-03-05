import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Application Gestion Parc Automobiles",
    description: "Développée pour l'Agence Urbaine de Settat. Solution complète de gestion et suivi de maintenance des véhicules, incluant géolocalisation et alertes. Projet noté 18/20.",
    tags: ["Flutter", "Laravel/PHP", "Géolocalisation"],
    link: "https://github.com/Alicia-Ouedraogo",
  },
    {
    title: "Application Gestion De Stock",
    description: "Développée pour le MINISTERE DE L'URBANISME( l'Agence Urbaine de Settat). Solution complète de gestion et suivi des fournitures.",
    tags: ["Flutter", "Laravel/PHP", "Géolocalisation"],
    link: "https://github.com/Alicia-Ouedraogo",
  },
  {
    title: "REM Waste (Site de Réservation)",
    description: "Développement Front-End pour une entreprise au Royaume-Uni. Site de réservation de bennes via API, responsive design.",
    tags: ["React", "API REST", "Tailwind", "Freelance"],
    link: "https://github.com/Alicia-Ouedraogo",
  },
  {
    title: "Lise Group - Humanitaire",
    description: "Conception et développement du site web vitrine pour l'association humanitaire Lise Group, mettant en avant les actions sociales et appels aux dons.",
    tags: ["Web Design", "react", "Impact Social"],
    link: "https://github.com/Alicia-Ouedraogo/HUMANAID",
  },
  {
    title: "Lips by Lise",
    description: "Site e-commerce dédié à la vente de produits cosmétiques. Gestion de catalogue, panier et interface client fluide.",
    tags: ["E-commerce", "Web Dev", "UX Design"],
    link: "https://github.com/Alicia-Ouedraogo",
  },
  {
    title: "Jeux Vidéo (Snake + Pokémon)",
    description: "Développement de jeux classiques pour renforcer la logique algorithmique et la manipulation du DOM/Canvas.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    link: "https://github.com/Alicia-Ouedraogo",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_05 // PROJECTS</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Projets Réalisés</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-all group flex flex-col">
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-xs font-body text-muted-foreground mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-primary/30 text-primary rounded-sm">{t}</span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-glow-magenta transition-all"
              >
                &gt; Voir le Code <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
