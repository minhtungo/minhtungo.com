import ProjectsClient from '@/components/Projects.client';
import { PROJECTS } from '@/lib/constants';

const Projects = async ({ start = 0, end = PROJECTS.length }: { start?: number; end?: number }) => {
  return <ProjectsClient projects={PROJECTS.slice(start, end)} />;
};

export default Projects;
