import ProjectCard from "../components/projects/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects, sectionTitles } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitles.projects} />
        {/* flex-wrap centra la última fila sin importar la cantidad de proyectos */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
