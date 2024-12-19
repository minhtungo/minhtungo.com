'use client';

import AnimatedContainer from '@/components/common/AnimatedContainer';
import ProjectItem from '@/components/ProjectsItem';
import { PROJECTS } from '@/lib/constants';
import { FadeContainer, PopUpFromBottom } from '@/lib/motion';
import { motion } from 'framer-motion';

const MotionLi = ({ children }: { children: React.ReactNode }) => {
  return <motion.li variants={PopUpFromBottom}>{children}</motion.li>;
};

const Projects = ({ start = 0, end = PROJECTS.length }: { start?: number; end?: number }) => {
  const projects = PROJECTS.slice(start, end);

  return (
    <AnimatedContainer variants={FadeContainer} className='grid lg:grid-cols-2 gap-3 group/list' list>
      {projects?.map((project) => (
        <MotionLi key={`${project.title}-project-card`}>
          <ProjectItem project={project} />
        </MotionLi>
      ))}
    </AnimatedContainer>
  );
};

export default Projects;
