import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 min-h-screen">

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition mb-12"
      >
        ← Back to Projects
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono tracking-widest text-gray-500 dark:text-gray-400 px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-full">
            {project.year}
          </span>
          <span className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">
            {project.role}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              View Live Site ↗
            </a>
          )}
          {project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View Code ↗
            </a>
          )}
        </div>
      </div>

      <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden relative mb-16 border border-gray-200 dark:border-gray-800">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="space-y-16">

        <section>
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </section>
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
              The Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </section>
        </div>

        <section>
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {project.images[1] && (
          <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-800">
            <Image
              src={project.images[1]}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top"
            />
          </div>
        )}

        <section>
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Challenges & Learnings
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.challenges}
          </p>
        </section>

        <section className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            Result
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.result}
          </p>
        </section>

      </div>

      <div className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
        >
          ← All Projects
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline"
        >
          Let's work together →
        </Link>
      </div>

    </main>
  );
}