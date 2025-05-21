import { Aboutsection } from "../components/Aboutsection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Herosection } from "../components/Herosection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effect */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Herosection />
        <Aboutsection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Footer */}
    </div>
  );
};
