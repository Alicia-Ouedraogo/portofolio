import { Phone } from "lucide-react";

const references = [
  {
    initial: "A",
    name: "AIT SAID Mehdi",
    role: "Professeur – ESRIM",
    location: "Settat, Maroc",
    phone: "+212 523 402 705",
  },
  {
    initial: "G",
    name: "GUISSY Abdelaly",
    role: "Directeur – ESRIM",
    location: "Settat, Maroc",
    phone: "+212 666 854 185",
  },
    {
    initial: "O",
    name: " M.OUEDRAOGO",
    role: "Coordonateur des classes prepa MENAPLN-OUAGA",
    location: "Ouagadougou, Burkina Faso",
    phone: "+226 71 86 64 65",
  },
 

];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-xs font-mono text-muted-foreground mb-2">SECTION_08 // REFERENCES</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">Mes Références</h2>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {references.map((ref, i) => (
            <div key={i} className="bg-card border border-border rounded-sm p-5 hover:border-primary/40 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-display text-sm text-primary flex-shrink-0">
                {ref.initial}
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{ref.name}</h3>
                <div className="text-xs font-mono text-muted-foreground">{ref.role}</div>
                <div className="text-xs font-mono text-muted-foreground mb-2">{ref.location}</div>
                <a href={`tel:${ref.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-glow-cyan transition-all">
                  <Phone className="w-3 h-3" /> {ref.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
