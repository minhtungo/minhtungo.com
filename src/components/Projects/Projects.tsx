import { Title } from '@/components/common';
import mergeClassNames from '@/lib/mergeClassNames';
import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '@/components//ui';
import Link from 'next/link';

import ProjectItem from './ProjectItem';

interface ProjectsProp {
  projects: Project[];
  home?: boolean;
}

const Projects = ({ projects, home }: ProjectsProp) => {
  return (
    <section
      id='projects'
      className={mergeClassNames(home && 'pt-16 lg:pt-20')}
    >
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

      <Link
        className='group relative mt-6 block text-center transition duration-200 motion-reduce:transition-none lg:mt-12'
        href={home ? '/projects' : '/library'}
      >
        <Button size='md' variant='secondary'>
          View More{' '}
          <IoMdArrowForward className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
        </Button>
      </Link>
    </section>
  );
};

export default Projects;
