import { Marquees, Title } from './';
import techStack from '../contents/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className='pt-12 lg:pt-16'>
      <Title
        title='Technologies'
        subtitle='Some Technologies I Have Used Recently'
      />
      <div className='h-30 -mt-6 flex items-center'>
        <Marquees className='py-4'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='px-4 lg:px-6 transition duration-200 ease-linear'
            >
              <Image className='h-auto w-8 md:w-12  lg:w-14' src={tech.src} alt={tech.name} height={56} width={56} />
            </div>
          ))}
        </Marquees>
      </div>
    </section>
  );
};
export default TechStack;
