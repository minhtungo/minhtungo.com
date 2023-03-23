'use client';

import { Icon, IconHelper, Link } from '@/components/common';
import { OpacityVariant } from '@/lib/framerVariants';
import urlFor from '@/lib/urlFor';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import ProjectImage from './ProjectImage';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => (
  <motion.div
    className='card'
    initial='hidden'
    whileInView='visible'
    variants={OpacityVariant}
    transition={{ delay: 0.5 }}
  >
    <ProjectImage
      src={urlFor(project.image).url()}
      name={project.name}
      url={project.liveURL}
    />

    <div className='-mt-14 flex w-full flex-col justify-start rounded-lg border border-custom-border-black bg-card-background-light p-4 pt-14 shadow-md dark:border-transparent-white dark:bg-card-background-dark md:-ml-1 md:mt-0 md:p-4 '>
      <div className='flex items-center'>
        <h3 className='text-lg font-semibold capitalize text-gray-800 dark:text-gray-300'>
          {project.name}
        </h3>
        <div className='ml-auto flex items-center gap-3'>
          <Icon>
            <Link
              href={project.githubURL}
              className='text-gray-600 dark:text-gray-400'
              animation={false}
            >
              <FiGithub className='h-5 w-5 transition-all hover:scale-110 hover:text-blue-500 active:scale-90' />
            </Link>
          </Icon>

          {project.liveURL && (
            <Icon>
              <Link
                href={project.liveURL}
                className='text-gray-600 dark:text-gray-400'
                animation={false}
              >
                <FiExternalLink className='h-5 w-5 transition-all hover:scale-110 hover:text-blue-500 active:scale-90' />
              </Link>
            </Icon>
          )}
        </div>
      </div>

      <p className='mt-3 text-sm text-gray-600 dark:text-gray-400 sm:text-base'>
        {project.description}
      </p>
      <div className='mt-3 flex flex-wrap items-center space-x-2 md:space-x-3 lg:mt-4'>
        {project.tools?.map((tool, index) => {
          return (
            <div
              key={`${tool}-${index}`}
              className='group relative transition duration-200 ease-linear'
            >
              <span className='flex items-center justify-center'>
                <IconHelper type={tool} className='h-5 w-5 md:h-6 md:w-6' />
                <span className='absolute -top-7 w-max scale-0 rounded bg-background-light px-2 py-1 text-sm font-medium text-gray-800 shadow transition-all group-hover:scale-100 dark:bg-background-dark dark:text-gray-300'>
                  {tool}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </motion.div>
);

export default ProjectItem;
