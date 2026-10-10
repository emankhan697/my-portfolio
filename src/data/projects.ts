export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "smart-trip-organizer",
    title: "Smart Trip Organizer",
    description: "A trip planning application built with SQL as the backend and Java as the frontend to organize travel itineraries.",
    thumbnail: "/projects/smart-trip.png", // You can add a screenshot here later
    tech: ["Java", "SQL"],
    liveUrl: "#", 
    repoUrl: "#", 
    featured: true,
  },
  {
    slug: "shafiq-dental-website",
    title: "Shafiq Dental Website",
    description: "A professional, responsive website for a dental clinic featuring service listings and a modern UI.",
    thumbnail: "/projects/dental-website.png", 
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://shafiq-dental-website.vercel.app/",
    repoUrl: "#", 
    featured: true,
  },
  {
    slug: "personal-portfolio",
    title: "My Personal Portfolio",
    description: "A professional portfolio containing work, blogs, reviews, and multiple pages to showcase my skills.",
    thumbnail: "/projects/portfolio.png", 
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#", 
    repoUrl: "#", 
    featured: true,
  },
];