import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out">
      <div className="relative aspect-video bg-gray-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {project.tag}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 group-hover:text-amber-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <p className="text-amber-600 text-xs font-medium mb-4">
          ↳ {project.outcome}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 font-medium hover:text-amber-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={project.caseStudy}
            className="text-gray-500 font-medium hover:text-amber-600 transition-colors"
          >
            Case Study
          </a>
        </div>
      </div>
    </article>
  );
}
