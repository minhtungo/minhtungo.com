import { Title } from '..';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import { OpacityVariant } from '@/lib/frammerVariants';

interface ProjectsProp {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProp) => {
  return (
    <section id='projects' className='mx-auto pt-10 lg:pt-16'>
      <Title title='Projects' subtitle='My Work' />

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
    </section>
  );
};

export default Projects;
