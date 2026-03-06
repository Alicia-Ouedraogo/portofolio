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
import GlitchLine from "../components/portfolio/GlitchLine";
import GlitchBackground from "../components/portfolio/GlitchBackground";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";

import pp from "../assets/pp.png"; // ✅ fichier en minuscules

// Type commun pour toutes les sections
type SectionProps = { id?: string };

// Caster les sections pour TS
const HeroSectionCasted = HeroSection as React.FC<SectionProps>;
const ProfileSectionCasted = ProfileSection as React.FC<SectionProps>;
const EducationSectionCasted = EducationSection as React.FC<SectionProps>;
const ExperienceSectionCasted = ExperienceSection as React.FC<SectionProps>;
const ProjectsSectionCasted = ProjectsSection as React.FC<SectionProps>;
const LeadershipSectionCasted = LeadershipSection as React.FC<SectionProps>;
const VisionSectionCasted = VisionSection as React.FC<SectionProps>;
const ReferencesSectionCasted = ReferencesSection as React.FC<SectionProps>;

// Footer avec bouton Finish
const FooterFinish: React.FC = () => {
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <div className="mt-4">
      {!showMessage ? (
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all animate-pulse"
          onClick={() => setShowMessage(true)}
        >
          Finish
        </button>
      ) : (
        <div className="mt-6 flex flex-col items-center animate-fade-in">
          <img
            src={pp}
            alt="PP"
            className="w-32 h-32 rounded-full mb-4 border-4 border-red-600 animate-bounce"
          />
          <h2 className="text-xl md:text-2xl font-display text-red-500 text-center mb-2 animate-pulse">
            Vous êtes à la bonne porte !
          </h2>
          <p className="text-xs md:text-sm font-mono text-muted-foreground text-center animate-spin-slow">
            Les compétences, l'engagement et la créativité sont ici pour vous.
          </p>
          <p className="text-xs md:text-sm font-mono text-muted-foreground text-center mt-2">
            Merci pour votre visite !
          </p>
        </div>
      )}
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* GlitchBackground fixe derrière tout le contenu */}
      <GlitchBackground />

      {/* Signal type scanner */}
      <div className="scanner-signal pointer-events-none fixed inset-0 z-20" />

      {/* Ligne horizontale animée */}
      <GlitchLine />

      {/* Navbar */}
      <Navbar />

      {/* Toasters */}
      <Toaster />
      <Sonner />

      {/* Sections principales */}
      <main className="relative z-10 pt-14 space-y-20">
        <div className="floating">
          <HeroSectionCasted id="accueil" />
        </div>
        <div className="floating delay-1">
          <ProfileSectionCasted id="profil" />
        </div>
        <div className="floating delay-2">
          <EducationSectionCasted id="formation" />
        </div>
        <div className="floating delay-3">
          <ExperienceSectionCasted id="experiences" />
        </div>
        <div className="floating delay-4">
          <ProjectsSectionCasted id="projets" />
        </div>
        <div className="floating delay-5">
          <LeadershipSectionCasted id="leadership" />
        </div>
        <div className="floating delay-6">
          <VisionSectionCasted id="vision" />
        </div>
        <div className="floating delay-7">
          <ReferencesSectionCasted id="references" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center">
        <p className="text-xs font-mono text-muted-foreground">
          © 2026 Alicia Lise Marion OUEDRAOGO — Portfolio v1.0
        </p>
        {/* Bouton Finish */}
        <FooterFinish />
      </footer>

      {/* Animations CSS */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(5px, -5px) rotate(1deg); }
            50% { transform: translate(-5px, 5px) rotate(-1deg); }
            75% { transform: translate(5px, 0px) rotate(0.5deg); }
          }

          .floating {
            animation: float 15s ease-in-out infinite;
          }

          .delay-1 { animation-delay: 1s; }
          .delay-2 { animation-delay: 2s; }
          .delay-3 { animation-delay: 3s; }
          .delay-4 { animation-delay: 4s; }
          .delay-5 { animation-delay: 5s; }
          .delay-6 { animation-delay: 6s; }
          .delay-7 { animation-delay: 7s; }

          /* Scanner Signal */
          @keyframes scan {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 0.2; }
            50% { top: 50%; opacity: 0.3; }
            90% { opacity: 0.2; }
            100% { top: 110%; opacity: 0; }
          }

          .scanner-signal {
            position: fixed;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #0ff, transparent);
            animation: scan 6s linear infinite;
            mix-blend-mode: screen;
          }

          /* Animations pour le Footer Finish */
          @keyframes fade-in { 0% {opacity:0;} 100% {opacity:1;} }
          @keyframes spin-slow { 0% {transform:rotate(0deg);} 100% {transform:rotate(360deg);} }
          .animate-fade-in { animation: fade-in 1s ease-in-out forwards; }
          .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        `}
      </style>
    </div>
  );
};

export default Index;