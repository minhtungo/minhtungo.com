import { Title, Icon } from "..";
import ProjectItem from "./ProjectItem";

interface ProjectsProp {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProp) => {
  return (
    <section id="projects" className="pt-12 lg:pt-16 mx-auto">
      <Title title="Projects" subtitle="My Work" />
      <div className="grid grid-cols-1 gap-12 sm:gap-4 mx-auto mt-6 lg:-mt-8">
        {projects?.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
