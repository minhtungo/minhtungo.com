import { Marquees, Title } from '..';
import techStack from '@/config/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className='pt-16'>
      <Title
        title='Technologies'
        subtitle='Some Technologies I Have Used Recently'
        className='text-center'
      />
      <div className='-mt-5 -mb-4 flex items-center'>
        <Marquees className='py-4 pb-6'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='group relative flex justify-center px-4 transition duration-200 ease-linear lg:px-6'
            >
              <Image
                className='h-auto w-8 md:w-12'
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
      </div>
    </section>
  );
};
export default TechStack;
