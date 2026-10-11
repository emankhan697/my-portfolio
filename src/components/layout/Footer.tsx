import { site } from "@/data/site";

export default function Footer() {
  return (
    <>
      {/* ============ CTA SECTION ============ */}
      <section className="border-t border-gray-200 dark:border-gray-900 mt-24">
        <div className="max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
          
          {/* GET STARTED label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-16 tracking-tight">
            Have a project in mind?
            <br />
            Let's work together.
          </h2>

          {/* Email Button */}
          <a
            href={`mailto:${site.email}`}
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-medium hover:bg-gray-200 transition"
          >
            {site.email}
          </a>
        </div>
      </section>

      {/* ============ MAIN FOOTER ============ */}
      <footer className="border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          
          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* Column 1: Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold">E</span>
                <span className="text-gray-400 dark:text-gray-600">→</span>
                <span className="text-2xl font-bold tracking-widest">MAN</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Frontend developer based in Wah Cantt, Pakistan, working with teams worldwide.
              </p>
            </div>

            {/* Column 2: Explore */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm break-all"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-sm"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="text-gray-700 dark:text-gray-300 text-sm">
                  Wah Cantt, Pakistan
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>Design & build — original layout</p>
          </div>

        </div>
      </footer>
    </>
  );
}