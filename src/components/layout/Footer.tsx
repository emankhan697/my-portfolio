import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">{site.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Frontend Developer based in Pakistan
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
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
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-900 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}