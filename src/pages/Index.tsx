// src/pages/Index.tsx
import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import ProfileSection from "../components/portfolio/ProfileSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import LeadershipSection from "../components/portfolio/LeadershipSection";
import VisionSection from "../components/portfolio/VisionSection";
import ReferencesSection from "../components/portfolio/ReferencesSection";
import GlitchLine from "../components/portfolio/GlitchLine"; // ta ligne horizontale animée
import cyberBg from "../assets/cyber-bg.jpg";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";

// ✅ Type commun pour toutes les sections
type SectionProps = {
  id?: string;
};

// ✅ Caster tes sections pour TS
const HeroSectionCasted = HeroSection as React.FC<SectionProps>;
const ProfileSectionCasted = ProfileSection as React.FC<SectionProps>;
const EducationSectionCasted = EducationSection as React.FC<SectionProps>;
const ExperienceSectionCasted = ExperienceSection as React.FC<SectionProps>;
const ProjectsSectionCasted = ProjectsSection as React.FC<SectionProps>;
const LeadershipSectionCasted = LeadershipSection as React.FC<SectionProps>;
const VisionSectionCasted = VisionSection as React.FC<SectionProps>;
const ReferencesSectionCasted = ReferencesSection as React.FC<SectionProps>;

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image */}
      <div
        className="fixed inset-0 opacity-20 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${cyberBg})` }}
      />

      {/* Ligne horizontale animée */}
      <GlitchLine />

      {/* Navbar */}
      <Navbar />
      <Navbar />
<GlitchLine /> {/* LA ligne glitch */}

      {/* Toasters */}
      <Toaster />
      <Sonner />

      {/* Sections principales */}
      <main className="relative z-10 pt-14">
        <HeroSectionCasted id="accueil" />
        <ProfileSectionCasted id="profil" />
        <EducationSectionCasted id="formation" />
        <ExperienceSectionCasted id="experiences" />
        <ProjectsSectionCasted id="projets" />
        <LeadershipSectionCasted id="leadership" />
        <VisionSectionCasted id="vision" />
        <ReferencesSectionCasted id="references" />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center">
        <p className="text-xs font-mono text-muted-foreground">
          © 2026 Alicia Lise Marion OUEDRAOGO — Portfolio v1.0
        </p>
      </footer>
    </div>
  );
};

export default Index;