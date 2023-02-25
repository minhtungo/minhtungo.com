'use client';

import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import { OpacityVariant } from '@/lib/framerVariants';
import classNames from 'classnames';
import { IoMdArrowForward } from 'react-icons/io';
import { Button, Title } from '@/components';

interface ProjectsProp {
  projects: Project[];
  className?: string;
  home?: boolean;
}

const Projects = ({ projects, className, home }: ProjectsProp) => {
  return (
    <section
      id='projects'
      className={classNames(className, 'mx-auto', home && 'pt-16 lg:pt-20')}
    >
      <Title
        title='Projects'
        subtitle={home ? '' : 'Showcase of my works on web development.'}
        home={home}
      />

      <div className='mx-auto -mt-2 grid grid-cols-1 gap-6 sm:gap-4 lg:-mt-9'>
        {projects?.map((project) => (
          <motion.div
            key={project._id}
            initial='hidden'
            whileInView='visible'
            variants={OpacityVariant}
            transition={{ delay: 0.5 }}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
      {home && (
        <div className='group relative mt-4 text-center transition duration-200 motion-reduce:transition-none lg:mt-6'>
          <Button href='/projects' variant='secondary'>
            See More Projects{' '}
            <IoMdArrowForward className='ml-1 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0' />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;
