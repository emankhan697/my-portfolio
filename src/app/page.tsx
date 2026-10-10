import { site } from "@/data/site";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24 min-h-screen">
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Your Story & Education */}
        <div className="flex-1 space-y-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <p>
            Hi, I'm <span className="font-semibold text-black dark:text-white">{site.name}</span>, 
            a Computer Science student at the University of Wah with a passion for both 
            software development and creative design. I love building solutions that create real-world impact.
          </p>
          <p>
            My expertise lies in Python, Java, SQL, and web technologies. I also have a strong 
            background in graphic design, which allows me to combine technical expertise with 
            visual creativity. I'm constantly learning and improving my skills to stay up-to-date 
            with the latest technologies.
          </p>
          
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Education</h2>
            <div className="space-y-4 border-l-2 border-gray-200 dark:border-gray-800 pl-4">
              <div>
                <h3 className="font-semibold text-black dark:text-white">University of Wah</h3>
                <p className="text-sm text-gray-500">BS Computer Science (2024 - 2028)</p>
                <p className="text-sm font-medium">CGPA: 3.72</p>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">The Scholars Science College</h3>
                <p className="text-sm text-gray-500">FSc Premedical (2022 - 2023)</p>
                <p className="text-sm font-medium">Percentage: 83.3%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills / Sidebar */}
        <div className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="font-bold text-xl mb-4">Expertise</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>⚡ Python</li>
            <li>⚡ Java</li>
            <li>⚡ C++</li>
            <li>⚡ SQL</li>
            <li>⚡ HTML Basics</li>
            <li>⚡ Data Entry</li>
            <li>⚡ Graphic Design</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h2 className="font-bold text-xl mb-4">Languages</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>English</li>
              <li>Urdu</li>
              <li>Punjabi</li>
            </ul>
          </div>

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