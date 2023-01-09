import React from 'react'
import Image from 'next/image';
import classNames from 'classnames';

interface ProjectImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProjectImage = ({ src, alt, className = '' }:ProjectImageProps ) => (
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

export default ProjectImage