import { projects } from "../assets/projects";
import ProjectCard from "./ProjectCard";
export default function ProjectList() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
