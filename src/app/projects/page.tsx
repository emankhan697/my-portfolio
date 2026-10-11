import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Timeline from "@/components/sections/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Skills />
      <Certifications />
      <Timeline />
    </main>
  );
}