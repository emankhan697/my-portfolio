"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Other",
    skills: ["Graphic Design", "Data Entry", "Computer Vision"],
  },
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24 border-t border-gray-100 dark:border-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight mb-12 text-center"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
          >
            <h3 className="font-bold text-lg mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1.5 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full"
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