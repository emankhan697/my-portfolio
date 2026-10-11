export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work" | "achievement";
};

export const timeline: TimelineItem[] = [
  {
    year: "2024 — 2028",
    title: "BS Computer Science",
    subtitle: "University of Wah",
    description: "Currently pursuing my bachelor's degree with a CGPA of 3.72. Focusing on software development, data structures, and modern web technologies.",
    type: "education",
  },
  {
    year: "2024 — Present",
    title: "Frontend Development",
    subtitle: "Self-Taught & Freelance",
    description: "Building responsive and modern web applications using React, Next.js, and Tailwind CSS. Continuously learning and improving my skills through real-world projects.",
    type: "work",
  },
  {
    year: "2022 — 2023",
    title: "FSc Premedical",
    subtitle: "The Scholars Science College",
    description: "Completed my intermediate education with 83.3%, which built a strong foundation in analytical thinking and problem-solving.",
    type: "education",
  },
];