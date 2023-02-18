import { Button, Title } from '..';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import { OpacityVariant } from '@/lib/framerVariants';
import classNames from 'classnames';
import { IoMdArrowForward } from 'react-icons/io';

interface ProjectsProp {
  projects: Project[];
  className?: string;
  home?: boolean;
}

const Projects = ({ projects, className, home }: ProjectsProp) => {
  return (
    <section
      id='projects'
      className={classNames(className, 'mx-auto pt-10 lg:pt-16')}
    >
      <Title title='Projects' subtitle='My Work' className='text-center' />

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
        <div className='group relative mt-4 text-center transition duration-200 lg:mt-6'>
          <Button href='/projects' variant='secondary'>
            See More Projects{' '}
            <IoMdArrowForward className='ml-2 group-hover:ml-3' />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;
