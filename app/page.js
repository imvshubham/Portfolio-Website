import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AchievementsSection from "./components/AchievementSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}