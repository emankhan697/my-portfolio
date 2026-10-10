import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Skills />
    </main>
  );
}