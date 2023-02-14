import React from 'react';
import Image from '@/components/common/Image';
import classNames from 'classnames';
import Link from 'next/link';

import { useRef, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
}: ProjectImageProps) => {
  const videoRef = useRef();
  const { ref: inViewRef, inView } = useInView({ threshold: 1 });

  const setRefs = useCallback(
    (node: any) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);

      if (node) {
        node.addEventListener('click', function () {
          if (this.paused) {
            this.play();
          } else {
            this.pause();
          }
        });
      }
    },
    [inViewRef]
  );

  useEffect(() => {
    if (!videoRef || !videoRef.current) {
      return;
    }

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  return (
    //replace the space in the name variable with a dash
    <Link
      className={classNames(
        'group relative -mt-[30%] w-[95%] shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20 sm:-mt-4 md:mt-0 md:w-[58%]',
        className
      )}
      href={url}
      target='_blank'
    >
      <Image
        title={name}
        alt={name}
        src={src}
        width={770}
        height={350}
        className='hidden h-full w-full object-cover backdrop-blur-xl lg:inline-block lg:group-hover:hidden'
      />

      <video
        ref={setRefs}
        playsInline
        autoPlay
        loop
        muted
        className='block h-full w-full lg:hidden lg:group-hover:block'
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
};

export default ProjectImage;
