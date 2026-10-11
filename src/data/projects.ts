export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  year: string;
  role: string;
  duration: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "shafiq-dental-website",
    title: "Shafiq Dental Website",
    description: "A professional, responsive website for a dental clinic featuring service listings and a modern UI to attract new patients.",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=675&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=675&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=675&fit=crop&q=80",
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://shafiq-dental-website.vercel.app/",
    repoUrl: "#",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    duration: "2 weeks",
    overview: "Shafiq Dental is a modern, professional website built for a dental clinic to establish their online presence and attract new patients through a clean, trustworthy digital experience.",
    problem: "The dental clinic had no online presence. Patients couldn't find information about services, timings, or how to book appointments. They were losing potential customers to competitors with better online visibility.",
    solution: "Built a fully responsive, mobile-first website featuring a clean modern design, service showcase, doctor profiles, patient testimonials, and easy appointment booking. The site loads fast and works perfectly on all devices.",
    features: [
      "Fully responsive on all devices",
      "Modern, trust-building UI design",
      "Service listing with detailed info",
      "Appointment booking section",
      "Patient testimonials carousel",
      "Optimized images and fast loading",
      "SEO-friendly structure",
    ],
    challenges: "The main challenge was designing a medical website that feels both professional and welcoming. I solved this by using a clean color palette, proper typography hierarchy, and plenty of white space to build trust.",
    result: "The website is live on Vercel and helping the clinic attract new patients. It scores 95+ on Google Lighthouse for Performance, Accessibility, and SEO.",
  },
  {
    slug: "personal-portfolio",
    title: "My Personal Portfolio",
    description: "A professional portfolio containing work, blogs, reviews, and multiple pages to showcase my frontend skills.",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=675&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=675&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=675&fit=crop&q=80",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://my-personal-portfolio-bl98.vercel.app/",
    repoUrl: "https://github.com/emankhan697/my-personal-portfolio",
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    duration: "3 weeks",
    overview: "My first portfolio website, built to showcase my work, blog posts, and reviews. This project marked the beginning of my journey as a frontend developer.",
    problem: "As a computer science student, I needed a professional online presence to showcase my skills to potential employers and freelance clients. Without a portfolio, my work was invisible.",
    solution: "Built a complete multi-page portfolio with Home, About, Blog, Portfolio, and Contact pages. Focused on clean design, smooth navigation, and making my work easily discoverable.",
    features: [
      "Multi-page structure (Home, About, Blog, Work, Contact)",
      "Blog section with article listings",
      "Portfolio showcase grid",
      "Contact page with working links",
      "Fully responsive design",
      "Smooth scrolling and animations",
    ],
    challenges: "Learning HTML, CSS, and JavaScript while building a real project was challenging. I had to research constantly, debug layout issues, and figure out responsive design patterns from scratch.",
    result: "Successfully deployed on Vercel and used as my primary portfolio until I upgraded to the new Next.js version. This project gave me the confidence to pursue frontend development seriously.",
  },
];