import React from 'react';
import Image from '@/components/common/Image';
import classNames from 'classnames';
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
  gifSrc,
}: ProjectImageProps) => {
  const videoSrc = `/static/images/projects/${name
    .toLowerCase()
    .split(' ')
    .join('-')}.webm`;
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
      {/* <Image
        title={name}
        alt={name}
        src={src}
        width={800}
        height={400}
        className='hidden h-full w-full object-cover backdrop-blur-xl lg:inline-block lg:group-hover:hidden'
      /> */}
      <Image
        title={name}
        alt={name}
        src={gifSrc}
        width={800}
        height={400}
        className='h-full w-full object-cover backdrop-blur-xl'
      />

      {/* <video
        playsInline
        autoPlay
        loop
        muted
        className='block h-full w-full lg:hidden lg:group-hover:block'
      >
        <source src={videoSrc} type='video/webm' />
      </video> */}
    </a>
  );
};

export default ProjectImage;
