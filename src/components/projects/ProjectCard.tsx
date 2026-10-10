import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition bg-white dark:bg-black flex flex-col">
      
      {/* Temporary Image Placeholder (until you add screenshots) */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium">
        {project.title} Preview
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm font-medium mt-auto">
          {project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              Live Demo <span>↗</span>
            </a>
          )}
          {project.repoUrl !== "#" && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              Code <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}