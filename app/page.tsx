import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GithubGraph from "@/components/GithubGraph";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import VolunteeringSection from "@/components/VolunteeringSection";
import BeyondCodeSection from "@/components/BeyondCodeSection";
import TerminalSection from "@/components/TerminalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      <HeroSection />
      <TerminalSection />
      {/* <ExperienceSection /> */}
      <GithubGraph />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <VolunteeringSection />
      <BeyondCodeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
