import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { Icon } from '..';
import ProjectImage from './ProjectImage';
import urlFor from '../../lib/urlFor';
import { renderTech } from '../../util/renderTech';

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

    <div className='flex flex-col justify-start gap-3 bg-card-background-light dark:bg-card-background-dark p-4 pt-14 md:p-5 md:-ml-1 shadow-md rounded-lg -mt-14 md:mt-0 w-full'>
      <div>
        <h1 className='text-md font-semibold capitalize text-gray-800 dark:text-gray-300 lg:text-lg'>
          {project.name}
        </h1>
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
          {project.description}
        </p>
      </div>

      <div className='flex items-center gap-1 flex-wrap'>
        {project.tools?.map((tool, index) => {
          return (
            <span
              key={`${tool}-${index}`}
              className='bg-gray-200 dark:bg-transparent-white text-gray-500 dark:text-gray-400 rounded px-2 py-1 text-xs sm:text-sm'
            >
              <div className='flex items-center gap-1'>
                {renderTech(tool)}
                {tool}
              </div>
            </span>
          );
        })}
      </div>
      <div className='mt-auto p-2 w-fit flex items-center mx-auto md:m-0 gap-4'>
        <Icon>
          <Link
            href={project.githubURL}
            title='Source Code on GitHub'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-gray-400 '
          >
            <FiGithub className='w-5 h-5 hover:scale-110 active:scale-90 transition-all hover:text-blue-500' />
          </Link>
        </Icon>

        {project.liveURL && (
          <Icon>
            <Link
              href={project.liveURL}
              title='Live Preview'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-gray-400 '
            >
              <FiExternalLink className='w-5 h-5 hover:scale-110 active:scale-90 transition-all hover:text-blue-500' />
            </Link>
          </Icon>
        )}
      </div>
    </div>
  </div>
);

export default ProjectItem;
