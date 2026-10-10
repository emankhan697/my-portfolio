"use client";

import { site } from "@/data/site";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium bg-green-50 text-green-700 border border-green-200 rounded-full dark:bg-green-950 dark:text-green-300 dark:border-green-900"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Available for work
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
      >
        Hi, I'm {site.name} 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
      >
        Frontend Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10"
      >
        {site.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <Link
          href="/projects"
          className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium hover:opacity-80 transition hover:scale-105 transform duration-200"
        >
          View My Work
        </Link>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition hover:scale-105 transform duration-200"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-6 text-gray-500 dark:text-gray-400"
      >
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${site.email}`}
          className="hover:text-black dark:hover:text-white transition"
        >
          Email
        </a>
      </motion.div>
    </section>
  );
}