import Marquees from './Marquees';
import techStack from '@/config/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className='mx-auto pt-6'>
      <h3 className='mb-1 bg-clip-text text-lg font-semibold text-gray-800 dark:text-gray-300 md:text-xl lg:text-2xl'>
        Some Technologies I Have Used Recently
      </h3>
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
