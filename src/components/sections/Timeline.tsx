"use client";

import { timeline } from "@/data/timeline";
import { motion } from "motion/react";

const typeIcons = {
  education: "🎓",
  work: "💼",
  achievement: "🏆",
};

export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24 border-t border-gray-100 dark:border-gray-900">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            My Journey
          </span>
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Experience & Education
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line — hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12 md:space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  isLeft ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >

                {/* Content Card */}
                <div className={`${isLeft ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>

                  {/* Year badge */}
                  <div className={`flex items-center gap-2 mb-3 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}>
                    <span className="text-xs font-mono tracking-widest text-gray-500 dark:text-gray-400 px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md md:inline-block">
                    {item.description}
                  </p>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 items-center justify-center text-lg z-10">
                  {typeIcons[item.type]}
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center text-base">
                  {typeIcons[item.type]}
                </div>

                {/* Empty column for grid symmetry */}
                <div />

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}