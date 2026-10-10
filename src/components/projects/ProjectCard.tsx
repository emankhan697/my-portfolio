"use client";

import { Project } from "@/data/projects";
import { motion } from "motion/react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition bg-white dark:bg-black flex flex-col"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium relative overflow-hidden">
        <span className="group-hover:scale-110 transition-transform duration-300">
          {project.title} Preview
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

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

        <div className="flex gap-4 text-sm font-medium mt-auto">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 group/link"
            >
              Live Demo{" "}
              <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          )}
          {project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 group/link"
            >
              Code{" "}
              <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}