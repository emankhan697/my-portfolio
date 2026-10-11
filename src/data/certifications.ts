export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: "Frontend Development",
    issuer: "Self-Taught / Online Learning",
    year: "2024",
    credentialUrl: "#",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Next.js Fundamentals",
    issuer: "Vercel / Next.js Docs",
    year: "2025",
    credentialUrl: "#",
    skills: ["Next.js", "App Router", "Server Components"],
  },
  {
    title: "Tailwind CSS",
    issuer: "Tailwind CSS Official Docs",
    year: "2025",
    credentialUrl: "#",
    skills: ["Utility-first CSS", "Responsive Design"],
  },
  {
    title: "Python Programming",
    issuer: "University Coursework",
    year: "2024",
    credentialUrl: "#",
    skills: ["Python", "OOP", "Data Structures"],
  },
  {
    title: "SQL & Database Design",
    issuer: "University Coursework",
    year: "2024",
    credentialUrl: "#",
    skills: ["SQL", "Database Design", "Queries"],
  },
  {
    title: "Graphic Design Fundamentals",
    issuer: "Self-Taught",
    year: "2023",
    credentialUrl: "#",
    skills: ["Design Principles", "Typography", "Color Theory"],
  },
];