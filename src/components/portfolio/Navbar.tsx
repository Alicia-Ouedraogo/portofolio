// src/components/portfolio/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#profil" },
  { label: "Formation", href: "#formation" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Leadership", href: "#leadership" },
  { label: "Vision", href: "#vision" },
  { label: "Références", href: "#references" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 relative">
        {/* Logo / Nom futuriste */}
        <a
          href="#accueil"
          onClick={(e) => handleScroll(e, "accueil")}
          className="relative font-display text-sm tracking-wider text-cyan-400 hover:text-purple-400 transition-colors"
        >
          &gt;_ A.OUEDRAOGO
          {/* Glitch overlays */}
          <span className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-50 animate-glitch-blur pointer-events-none">
            &gt;_ A.OUEDRAOGO
          </span>
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className="relative text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {item.label}
              <span className="absolute top-0 left-0 w-full h-full text-purple-400 opacity-30 animate-glitch-blur pointer-events-none">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border flex flex-col items-center py-4 animate-fade-in">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="text-sm font-mono text-muted-foreground hover:text-cyan-400 transition-colors py-2 animate-fade-in-up relative"
            >
              {item.label}
              <span className="absolute top-0 left-0 w-full h-full text-purple-400 opacity-20 animate-glitch-blur pointer-events-none">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;