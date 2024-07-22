import ViewMoreButton from '@/components/common/ViewMoreButton';
import ProjectsClient from '@/components/Projects/Projects.client';
import { PROJECTS } from '@/lib/constants';

interface ProjectsProps {
  showButton?: boolean;
}

const Projects = async ({ showButton }: ProjectsProps) => {
  return (
    <>
      <ProjectsClient projects={PROJECTS} />
      {showButton && (
        <div className='mt-6 text-center lg:mt-12'>
          <ViewMoreButton href='/library' />
        </div>
      )}
    </>
  );
};

export default Projects;
