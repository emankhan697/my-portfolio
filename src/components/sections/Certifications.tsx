"use client";

import { certifications } from "@/data/certifications";
import { motion } from "motion/react";

export default function Certifications() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24 border-t border-gray-100 dark:border-gray-900">

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
            Continuous Learning
          </span>
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
          Courses and programs I've completed to sharpen my skills.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 flex flex-col"
          >

            {/* Icon + Year Row */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 tracking-widest">
                {cert.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold tracking-tight mb-1 leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
              {cert.issuer}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-auto mb-5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Verify Link (sirf tab dikhega jab URL ho) */}
            {cert.credentialUrl !== "#" && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition inline-flex items-center gap-1 group/link"
              >
                View Credential
                <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            )}

          </motion.div>
        ))}
      </div>

    </section>
  );
}