import ProjectsClient from '@/components/projects/Projects.client';
import { PROJECTS } from '@/lib/constants';

const Projects = async () => {
  return <ProjectsClient projects={PROJECTS} />;
};

export default Projects;
