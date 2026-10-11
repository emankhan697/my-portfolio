import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 min-h-screen">
      
      {/* ============ HEADING ============ */}
      <section className="py-24 md:py-32 text-center">
        
        {/* GET STARTED label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-gray-400 dark:bg-gray-700" />
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight font-bold">
          Let's work together.
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
          I'm currently available for freelance work and open to full-time opportunities.
          Feel free to reach out through any of the platforms below.
        </p>

      </section>

      {/* ============ CONTACT CARDS ============ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
        
        {/* Email */}
        <a
          href={`mailto:${site.email}`}
          className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400 text-xl">
              ✉️
            </div>
            <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition text-xl">
              ↗
            </span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
            Email
          </p>
          <p className="font-semibold text-lg break-all">{site.email}</p>
        </a>

        {/* Phone */}
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
              📞
            </div>
            <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition text-xl">
              ↗
            </span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
            Phone
          </p>
          <p className="font-semibold text-lg">{site.phone}</p>
        </a>

        {/* LinkedIn */}
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-[#0A66C2] transition"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </div>
            <span className="text-gray-400 group-hover:text-[#0A66C2] transition text-xl">
              ↗
            </span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
            LinkedIn
          </p>
          <p className="font-semibold text-lg">Eman Zafar</p>
        </a>

        {/* GitHub */}
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-black dark:hover:border-white transition"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-black dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </div>
            <span className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition text-xl">
              ↗
            </span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
            GitHub
          </p>
          <p className="font-semibold text-lg">emankhan697</p>
        </a>

      </section>

    </main>
  );
}