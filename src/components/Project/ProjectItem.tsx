import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { Icon } from '@/components';
import urlFor from '@/lib/urlFor';
import { renderTech } from '@/util/renderTech';
import ProjectImage from './ProjectImage';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => (
  <div className='card'>
    <ProjectImage
      src={urlFor(project.image).url()}
      gifSrc={urlFor(project.gifImage).url()}
      name={project.name}
      url={project.liveURL}
    />

    <div className='-mt-14 flex w-full flex-col justify-start gap-3 rounded-lg border border-custom-border-black bg-card-background-light p-4 pt-14 shadow-md dark:border-transparent-white dark:bg-card-background-dark md:-ml-1 md:mt-0 md:p-5 '>
      <div>
        <h1 className='text-md font-semibold capitalize text-gray-800 dark:text-gray-300 lg:text-lg'>
          {project.name}
        </h1>
        <p className='text-sm text-gray-600 dark:text-gray-400 sm:text-base'>
          {project.description}
        </p>
      </div>

      <div className='flex flex-wrap items-center gap-1'>
        {project.tools?.map((tool, index) => {
          return (
            <span
              key={`${tool}-${index}`}
              className='rounded bg-gray-200 px-2 py-1 text-xs text-gray-500 dark:bg-transparent-white dark:text-gray-400 sm:text-[0.8rem]'
            >
              <div className='flex items-center gap-1'>
                {renderTech(tool)}
                {tool}
              </div>
            </span>
          );
        })}
      </div>
      <div className='mx-auto mt-auto flex w-fit items-center gap-4 p-2 md:m-0'>
        <Icon>
          <a
            href={project.githubURL}
            title='Source Code on GitHub'
            target='_blank'
            rel='noreferrer'
            className='text-gray-600 dark:text-gray-400 '
          >
            <FiGithub className='h-5 w-5 transition-all hover:scale-110 hover:text-blue-500 active:scale-90' />
          </a>
        </Icon>

        {project.liveURL && (
          <Icon>
            <a
              href={project.liveURL}
              title='Live Preview'
              target='_blank'
              rel='noreferrer'
              className='text-gray-600 dark:text-gray-400 '
            >
              <FiExternalLink className='h-5 w-5 transition-all hover:scale-110 hover:text-blue-500 active:scale-90' />
            </a>
          </Icon>
        )}
      </div>
    </div>
  </div>
);

export default ProjectItem;
