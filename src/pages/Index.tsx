import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProfileSection from "@/components/portfolio/ProfileSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import VisionSection from "@/components/portfolio/VisionSection";
import ReferencesSection from "@/components/portfolio/ReferencesSection";
import cyberBg from "@/assets/cyber-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image */}
      <div
        className="fixed inset-0 opacity-20 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${cyberBg})` }}
      />
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <LeadershipSection />
        <VisionSection />
        <ReferencesSection />
      </main>

      <footer className="relative z-10 border-t border-border py-8 text-center">
        <p className="text-xs font-mono text-muted-foreground">
          © 2026 Alicia Lise Marion OUEDRAOGO — Portfolio v1.0
        </p>
      </footer>
    </div>
  );
};

export default Index;
