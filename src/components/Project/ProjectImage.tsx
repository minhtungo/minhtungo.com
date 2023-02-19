import React from 'react';
import Image from '@/components/common/Image';
import classNames from 'classnames';

const videoSrc = {
  cinecity:
    'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
  'job-tracker':
    'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348435/job-tracker_pjmfs7.webm',
  kanban:
    'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348435/kanban_zjghha.webm',
};
interface ProjectImageProps {
  src: string;
  name: string;
  url: string;
  className?: string;
  gifSrc: string;
}

const ProjectImage = ({
  src,
  name,
  className = '',
  url,
}: ProjectImageProps) => {
  const videoLink = `${name.toLowerCase().split(' ').join('-')}`;

  return (
    <a
      className={classNames(
        'group relative -mt-[30%] w-[95%] shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20 sm:-mt-4 md:mt-0 md:w-[60%]',
        className
      )}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      <Image
        title={name}
        alt={name}
        src={src}
        width={800}
        height={400}
        className='hidden h-full w-full object-cover backdrop-blur-xl lg:inline-block lg:group-hover:hidden'
      />
      <video
        playsInline
        autoPlay
        loop
        muted
        className='block h-full w-full lg:hidden lg:group-hover:block'
      >
        <source src={videoSrc[videoLink]} type='video/webm' />
      </video>
    </a>
  );
};

export default ProjectImage;
