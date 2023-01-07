// @ts-nocheck

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Title, Icon } from '..';
import { projects } from '../../contents/projects';

const ProjectImage = ({ src, alt, className = '' }) => (
  <div
    className={classNames(
      'relative -mt-[35%] sm:-mt-0 md:-ml-[35%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/20 before:z-10',
      className
    )}
  >
    <Image
      title={alt}
      alt={alt}
      src={src}
      width={1200}
      height={630}
      // placeholder='blur'
      // blurDataURL={src}
      quality={25}
      className='lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl'
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      }}
    />
  </div>
);

const Project = ({ project }) => (
  <div className='card'>
    <ProjectImage src={project.image} alt={project.name} />
    <div className={`flex flex-col justify-start gap-3`}>
      <h1 className='font-bold capitalize text-gray-200'>{project.name}</h1>
      <p className='text-sm text-gray-400 dark:text-neutral-400'>
        {project.description}
      </p>
      <div className='flex items-center gap-1 flex-wrap'>
        {project.tech?.map((tech, index) => {
          return (
            <span
              key={`${tool}-${index}`}
              className='bg-transparent-white text-gray-500 rounded px-2 py-1 text-xs'
            >
              {tech}
            </span>
          );
        })}
      </div>
      <div className='mt-auto p-2 w-fit flex items-center gap-4'>
        <Icon>
          <Link
            href={project.githubURL}
            title='Source Code on GitHub'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-blue-500'
          >
            <FiGithub className='w-5 h-5 hover:scale-110 active:scale-90 transition-all' />
          </Link>
        </Icon>

        {project.previewURL && (
          <Icon>
            <Link
              href={project.previewURL}
              title='Live Preview'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-blue-500'
            >
              <FiExternalLink className='w-5 h-5 hover:scale-110 active:scale-90 transition-all' />
            </Link>
          </Icon>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id='projects' className='mt-12 lg:mt-16 max-w-4xl mx-auto'>
      <Title title='Projects' subtitle='My Work' />
      <div className='grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%] -mt-4 lg:-mt-8'>
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
