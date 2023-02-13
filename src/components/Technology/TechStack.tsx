import { Marquees, Title } from '..';
import techStack from '@/config/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className='pt-6'>
      <Title
        title='Technologies'
        subtitle='Some Technologies I Have Used Recently'
      />
      <div className='-mt-5 flex items-center -mb-4'>
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
              <span className='absolute -top-5 w-max scale-0 bg-background-light dark:bg-background-dark px-2 py-1 text-sm group-hover:scale-100 text-gray-800 dark:text-gray-300 transition-all rounded font-medium shadow'>
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
