import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
