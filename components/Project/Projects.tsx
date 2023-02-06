import { Title } from '..';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import { OpacityVariant } from '../../lib/FramerMotionVariants';

interface ProjectsProp {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProp) => {
  return (
    <section id='projects' className='pt-10 lg:pt-16 mx-auto'>
      <Title title='Projects' subtitle='My Work' />
      <div className='grid grid-cols-1 gap-6 sm:gap-4 mx-auto -mt-2 lg:-mt-9'>
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
