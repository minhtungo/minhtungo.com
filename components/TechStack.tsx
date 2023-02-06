import { Marquees, Title } from './';
import techStack from '../content/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className='pt-16 lg:pt-20'>
      <Title
        title='Technologies'
        subtitle='Some Technologies I Have Used Recently'
      />
      <div className='-mt-5 flex items-center -mb-3'>
        <Marquees className='py-4 pb-6'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='px-4 lg:px-6 transition duration-200 ease-linear flex justify-center group relative'
            >
              <Image
                className='h-auto w-8 md:w-12'
                src={tech.src}
                alt={tech.name}
                height={56}
                width={56}
              />
              <span className='absolute top-0 md:top-[45px] scale-0 rounded bg-background-light dark:bg-background-dark p-1 text-xs group-hover:scale-100 text-gray-800 dark:text-gray-300 transition-all'>
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
