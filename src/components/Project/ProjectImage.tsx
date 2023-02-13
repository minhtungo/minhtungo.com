import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface ProjectImageProps {
  src: string;
  gifSrc: string;
  name: string;
  url: string;
  className?: string;
}

const ProjectImage = ({
  src,
  name,
  className = '',
  url,
  gifSrc,
}: ProjectImageProps) => (
  //replace the space in the name variable with a dash
  <Link
    className={classNames(
      'relative -mt-[30%] sm:-mt-4 md:mt-0 w-[95%] md:w-[58%] shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/20 before:z-10 group',
      className
    )}
    href={url}
    target='_blank'
  >
    <Image
      title={name}
      alt={name}
      src={src}
      width={850}
      height={450}
      className='backdrop-blur-xl object-cover w-full h-full hidden lg:inline-block lg:group-hover:hidden'
    />

    <video
      playsInline
      autoPlay
      loop
      muted
      className='w-full h-full block lg:hidden lg:group-hover:block'
    >
      <source
        src={`/static/images/projects/${name
          .toLowerCase()
          .split(' ')
          .join('-')}.webm`}
        type='video/webm'
      />
    </video>
  </Link>
);

export default ProjectImage;
