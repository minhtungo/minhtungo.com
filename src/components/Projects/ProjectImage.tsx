import React from 'react';
import { Image } from '@/components/ui';
import { videoSrc } from '@/constant/videoSrc';
import mergeClassNames from '@/lib/mergeClassNames';

interface ProjectImageProps {
  src: string;
  name: string;
  url: string;
  className?: string;
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
      className={mergeClassNames(
        'group relative -mt-[30%] w-[100%] shrink-0 overflow-hidden rounded-t-lg rounded-b-none shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20 sm:-mt-4 md:mt-0 md:w-[60%] lg:rounded-lg',
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
        className={mergeClassNames(
          'h-full w-full object-cover backdrop-blur-xl lg:inline-block',
          videoSrc[videoLink] && 'hidden lg:group-hover:hidden'
        )}
      />
      {videoSrc[videoLink] && (
        <video
          playsInline
          autoPlay
          loop
          muted
          className='block h-full w-full lg:hidden lg:group-hover:block'
        >
          <source src={videoSrc[videoLink]} type='video/webm' />
        </video>
      )}
    </a>
  );
};

export default ProjectImage;
