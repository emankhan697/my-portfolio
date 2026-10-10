import Link from "next/link";
import { site } from "@/data/site";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight hover:opacity-80 transition"
        >
          {site.name}
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link
            href="/projects"
            className="hover:text-black dark:hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-black dark:hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-black dark:hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-sm font-medium border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}