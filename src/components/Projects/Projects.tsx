import ProjectsClient from '@/components/Projects/Projects.client';
import { PROJECTS } from '@/lib/constants';

const Projects = async () => {
  return <ProjectsClient projects={PROJECTS} />;
};

export default Projects;
