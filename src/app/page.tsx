import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectGrid from "@/components/ProjectGrid";
import InternshipGallery from "@/components/InternshipGallery";
import Achievements from "@/components/Achievements";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <ProjectGrid />
      <InternshipGallery />
      <Achievements />
      <ExperienceTimeline />
      <ContactForm />
    </>
  );
}
