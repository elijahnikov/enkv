import { projects } from "@/lib/projects";
import ProjectCard from "@/components/common/project-card";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
