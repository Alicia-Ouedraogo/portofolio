// src/components/portfolio/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icônes hamburger

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
    setOpen(false); // ferme le menu mobile après le clic
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        {/* Logo / Nom */}
        <a
          href="#accueil"
          className="font-display text-sm tracking-wider text-primary hover:text-cyan-400 transition-colors"
          onClick={(e) => handleScroll(e, "accueil")}
        >
          &gt;_ A.OUEDRAOGO
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className="text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors px-3 py-2"
            >
              {item.label}
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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace("#", ""))}
              className="text-sm font-mono text-muted-foreground hover:text-cyan-400 transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;