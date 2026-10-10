"use client";

import { motion } from "motion/react";

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "3.72", label: "Current CGPA" },
  { value: "6+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

export default function Stats() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}