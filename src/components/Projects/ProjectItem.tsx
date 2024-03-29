'use client';

import { ProjectsIcon, IconHelper, Text } from '@/components/ui';
import { OpacityVariant } from '@/lib/framerVariants';
import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';

import ProjectImage from './ProjectImage';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => (
  <motion.div className='card' initial='hidden' whileInView='visible' variants={OpacityVariant} transition={{ delay: 0.5 }}>
    <ProjectImage src={urlFor(project.image).url()} name={project.name} url={project.liveURL} />

    <div className='-mt-14 flex w-full flex-col justify-start rounded-lg border border-custom-border-black bg-card-background-light p-4 pt-14 shadow-md dark:border-transparent-white dark:bg-card-background-dark md:-ml-1 md:mt-0 md:p-5'>
      <div className='flex items-center'>
        <Text variant='title' size='lg' as='span'>
          {project.name}
        </Text>
        <ProjectsIcon githubURL={project.githubURL} liveURL={project.liveURL || ''} className='ml-auto' />
      </div>

      <Text size='sm' variant='description' className='my-2'>
        {project.description}
      </Text>
      <div className='mt-3 flex flex-wrap items-center space-x-2 md:space-x-3 lg:mt-3'>
        {project.tools?.map((tool, index) => {
          return (
            <div key={`${tool}-${index}`} className='group relative transition duration-200 ease-linear'>
              <div className='flex items-center justify-center'>
                <IconHelper type={tool} className='h-5 w-5 md:h-6 md:w-6' />
                <span className='absolute -top-7 w-max scale-0 rounded bg-background-light px-2 py-1 text-sm font-medium text-gray-800 shadow transition-all group-hover:scale-100 dark:bg-background-dark dark:text-gray-300'>{tool}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </motion.div>
);

export default ProjectItem;
