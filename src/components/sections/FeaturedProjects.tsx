import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects() {
  // Filter to only show featured projects
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="max-w-5xl mx-auto px-4 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}