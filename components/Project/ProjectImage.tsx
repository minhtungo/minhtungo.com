import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface ProjectImageProps {
  src: string;
  gifSrc: string;
  alt: string;
  url: string;
  className?: string;
}

const ProjectImage = ({
  src,
  alt,
  className = '',
  url,
  gifSrc,
}: ProjectImageProps) => (
  <Link
    className={classNames(
      'relative -mt-[30%] sm:-mt-4 md:mt-0 w-[95%] md:w-[60%] shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/20 before:z-10 group',
      className
    )}
    href={url}
    target='_blank'
  >
    <Image
      title={alt}
      alt={alt}
      src={src}
      width={1000}
      height={500}
      className='duration-300 backdrop-blur-xl object-cover w-full h-full hidden lg:inline-block lg:group-hover:hidden'
    />
    {gifSrc && (
      <Image
        title={alt}
        alt={alt}
        src={gifSrc}
        width={750}
        height={350}
        className='duration-300 backdrop-blur-xl object-cover w-full h-full inline-block lg:hidden lg:group-hover:inline-block'
        priority
      />
    )}
  </Link>
);

export default ProjectImage;
