"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    subtitle: "Programming & Query",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    subtitle: "UI & Frameworks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools",
    subtitle: "Workflow & Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Other",
    subtitle: "Additional Skills",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    skills: ["Graphic Design", "Data Entry", "Computer Vision"],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 border-t border-gray-100 dark:border-gray-900">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            What I Work With
          </span>
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Skills & Expertise
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 mb-5 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-1 tracking-tight">
              {category.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-5 tracking-wide">
              {category.subtitle}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:border-black dark:hover:border-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}