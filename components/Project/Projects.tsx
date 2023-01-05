// @ts-nocheck

import { BsGithub } from 'react-icons/bs';
import { MdOutlineLink } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Title } from '..';

const dummnyProjects = [
  {
    id: 1,
    image: '/static/images/projects/cine-city.png',
    name: 'CineCity',
    tools: ['React', 'Express', 'NodeJS', 'MongoDB', 'Material UI', 'Firebase'],
    description: 'a movie web app including features such as the ability for users to add reviews, favorite movies, and change passwords and profile pictures.',
    githubURL: 'https://github.com/minhtungo/Cine-City',
    previewURL: 'https://cine-city.vercel.app/',
  },
  {
    id: 2,
    image: '/static/images/projects/cine-city.png',
    name: 'CineCity 2',
    tools: ['React', 'Express', 'NodeJS', 'MongoDB', 'Material UI', 'Firebase'],
    description: 'a movie web app including features such as the ability for users to add reviews, favorite movies, and change passwords and profile pictures.',
    githubURL: 'https://github.com/minhtungo/Cine-City',
    previewURL: 'https://cine-city.vercel.app/',
  },
];

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
      placeholder='blur'
      blurDataURL={src}
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
      <h1 className='font-bold capitalize text-neutral-900 dark:text-neutral-200'>
        {project.name}
      </h1>
      <p className='text-sm text-gray-400 dark:text-neutral-400'>
        {project.description}
      </p>
      <div className='flex items-center gap-1 flex-wrap'>
        {project.tools!.map((tool, index) => {
          return (
            <span
              key={`${tool}-${index}`}
              className='bg-gray-100 dark:bg-darkPrimary text-gray-500 rounded px-2 py-1 text-xs'
            >
              {tool}
            </span>
          );
        })}
      </div>
      <div className='mt-auto p-2 w-fit flex items-center gap-4'>
        <Link
          href={project.githubURL}
          title='Source Code on GitHub'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 hover:text-black dark:hover:text-white'
        >
          <BsGithub className='w-6 h-6 hover:scale-110 active:scale-90 transition-all' />
        </Link>

        {project.previewURL && (
          <Link
            href={project.previewURL}
            title='Live Preview'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-black dark:hover:text-white'
          >
            <MdOutlineLink className='w-6 h-6 hover:scale-110 active:scale-90 transition-all' />
          </Link>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id='projects' className='mt-12 lg:mt-16'>
      <Title title='Projects' />
      <div className='grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%] -mt-4 lg:-mt-8'>
        {dummnyProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
