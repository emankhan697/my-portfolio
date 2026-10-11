"use client";

import { site } from "@/data/site";
import Link from "next/link";
import { motion } from "motion/react";

// Delay constants — asaani se adjust karne ke liye
const DELAY = {
  badge: 0.2,
  hello: 0.5,
  im: 0.8,
  eman: 1.1,
  zafar: 1.4,
  frontend: 1.8,
  developer: 2.2,
  tagline: 2.6,
  buttons: 3.0,
  socials: 3.4,
  card: 1.0,
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-start text-left">
          
          {/* 1. Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: DELAY.badge }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-full dark:bg-green-950/50 dark:text-green-300 dark:border-green-900"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </motion.div>

          {/* 2-5. "Hello, I'm Eman Zafar 👋" — word by word */}
          <p className="text-base text-gray-500 dark:text-gray-400 mb-3 tracking-wide flex flex-wrap gap-x-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: DELAY.hello }}
            >
              Hello,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: DELAY.im }}
            >
              I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: DELAY.eman }}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              Eman
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: DELAY.zafar }}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              Zafar 👋
            </motion.span>
          </p>

          {/* 6-7. "Frontend Developer." — word by word */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY.frontend }}
              className="inline-block"
            >
              Frontend
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY.developer }}
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent"
            >
              Developer.
            </motion.span>
          </h1>

          {/* 8. Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: DELAY.tagline }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed"
          >
            {site.tagline}
          </motion.p>

          {/* 9. Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: DELAY.buttons }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="group bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-700 px-7 py-3.5 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition text-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* 10. Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: DELAY.socials }}
            className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="hidden sm:inline">Follow me</span>
            <div className="hidden sm:block w-8 h-px bg-gray-300 dark:bg-gray-700" />
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
        </div>

        {/* RIGHT: Photo / Initials Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: DELAY.card }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative">
            
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-20 blur-2xl" />
            
            <div className="relative w-80 h-96 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8 flex flex-col justify-between overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">EZ</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                  Frontend Developer
                </p>
                <h3 className="text-2xl font-bold mb-1">{site.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Computer Science Student
                </p>
              </div>

              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">CGPA</p>
              <p className="text-lg font-bold">3.72</p>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
              <p className="text-lg font-bold">3+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}