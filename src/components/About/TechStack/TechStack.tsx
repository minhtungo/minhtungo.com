'use client';

import Marquees from './Marquees';
import techStack from '@/config/techStack';
import { Image } from '@/components/common';
import { Heading } from '@/components/ui';

const TechStack = () => {
  return (
    <section id='technologies' className='mx-auto pt-6'>
      <Heading as='h3' className='mb-1 md:mb-3'>
        Some Technologies I Have Used Recently
      </Heading>
      <Marquees className='py-4 pb-6'>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className='group relative flex justify-center px-4 transition duration-200 ease-linear lg:px-6'
          >
            <Image
              className='h-auto w-6 md:w-10'
              src={tech.src}
              alt={tech.name}
              height={56}
              width={56}
            />
            <span className='absolute -top-5 w-max scale-0 rounded bg-background-light px-2 py-1 text-sm font-medium text-gray-800 shadow transition-all group-hover:scale-100 dark:bg-background-dark dark:text-gray-300'>
              {tech.name}
            </span>
          </div>
        ))}
      </Marquees>
    </section>
  );
};
export default TechStack;
