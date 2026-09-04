import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Roofiif Alria Dzakwan`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const sections = [
    { heading: "Problem & Context", body: project.details.problem },
    { heading: "Constraints & Tradeoffs", body: project.details.constraints },
    { heading: "Architecture & Approach", body: project.details.architecture },
    { heading: "Results & Lessons", body: project.details.results },
  ];

  return (
    <article className="pt-28 pb-24 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors mb-8"
        >
          ← Back to projects
        </Link>

        <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {project.tag}
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hero image placeholder */}
        <div className="relative aspect-video bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden mb-12 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)]">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {sections.map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {section.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.body}</p>

            {/* Architecture diagram placeholder */}
            {i === 2 && (
              <div className="mt-6 aspect-[16/9] bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
                Architecture / data-flow diagram placeholder
              </div>
            )}
          </div>
        ))}

        <div className="flex gap-4 pt-4 border-t border-gray-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
