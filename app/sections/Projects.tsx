import ProjectCard from "../components/projects/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}