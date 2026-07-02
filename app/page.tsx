import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import { Analytics } from "@vercel/analytics/next"
import BeyondCodeSection from "@/components/BeyondCodeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Analytics/>
      <Navbar />
      <HeroSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <BeyondCodeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

