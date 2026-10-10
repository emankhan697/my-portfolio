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
    slug: "shafiq-dental-website",
    title: "Shafiq Dental Website",
    description: "A professional, responsive website for a dental clinic featuring service listings and a modern UI to attract new patients.",
    thumbnail: "/projects/dental-website.png", 
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://shafiq-dental-website.vercel.app/",
    repoUrl: "#", 
    featured: true,
  },
  {
    slug: "personal-portfolio",
    title: "My Personal Portfolio",
    description: "A professional portfolio containing work, blogs, reviews, and multiple pages to showcase my frontend skills.",
    thumbnail: "/projects/portfolio.png", 
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://my-personal-portfolio-bl98.vercel.app/", 
    repoUrl: "https://github.com/emankhan697/my-personal-portfolio", 
    featured: true,
  },
];