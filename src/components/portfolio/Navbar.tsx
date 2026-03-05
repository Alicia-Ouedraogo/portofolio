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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <a href="#accueil" className="font-display text-sm tracking-wider text-primary">
          &gt;_ A.OUEDRAOGO <span className="inline-block w-2 h-4 bg-primary animate-pulse-cyan ml-1" />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors px-3 py-2"
            >
              // {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
