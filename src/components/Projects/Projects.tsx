import { Title } from '@/components//ui';
import mergeClassNames from '@/lib/mergeClassNames';

import ViewMoreButton from '../common/ViewMoreButton';
import ProjectItem from './ProjectItem';

interface ProjectsProp {
  projects: Project[];
  home?: boolean;
}

const Projects = ({ projects, home }: ProjectsProp) => {
  return (
    <div className={mergeClassNames(home && 'pt-16 lg:pt-20')}>
      <Title
        title='Projects'
        subtitle={home ? '' : 'Showcase of my works on web development.'}
        home={home}
      />

      <div className='mx-auto -mt-2 grid grid-cols-1 gap-6 sm:gap-4 lg:-mt-9'>
        {projects?.map((project) => (
          <ProjectItem project={project} key={project._id} />
        ))}
      </div>
      <div className='mt-6 text-center lg:mt-12'>
        <ViewMoreButton href={home ? '/projects' : '/library'} />
      </div>
    </div>
  );
};

export default Projects;
