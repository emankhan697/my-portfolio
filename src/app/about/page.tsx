import { site } from "@/data/site";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24 min-h-screen">
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Your Story */}
        <div className="flex-1 space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <p>
            Hi, I'm <span className="font-semibold text-black dark:text-white">{site.name}</span>, 
            a passionate Frontend Developer based in Pakistan. I specialize in building 
            modern, responsive, and accessible web applications.
          </p>
          <p>
            My journey into web development started with a curiosity about how websites 
            work. That curiosity quickly turned into a passion for creating beautiful 
            user interfaces using technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p>
            I love turning complex problems into simple, intuitive designs. When I'm not 
            coding, I'm constantly learning new technologies and improving my skills to 
            stay up-to-date with the latest industry trends.
          </p>
          <p>
            I'm currently looking for opportunities where I can contribute my frontend 
            skills and grow as a developer.
          </p>
        </div>

        {/* Skills / Sidebar */}
        <div className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="font-bold text-xl mb-4">Skills</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>⚡ HTML5 & CSS3</li>
            <li>⚡ JavaScript (ES6+)</li>
            <li>⚡ TypeScript</li>
            <li>⚡ React & Next.js</li>
            <li>⚡ Tailwind CSS</li>
            <li>⚡ Git & GitHub</li>
            <li>⚡ Responsive Design</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link 
              href="/contact" 
              className="block text-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              Let's Talk
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}