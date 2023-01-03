import { Marquees, Title } from './';
import techStack from '../contents/techStack';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section id='technologies' className=''>
      <Title
        title='Technologies'
        subtitle='Some Technologies I Have Used Recently'
      />
      <div className='h-48 mt-2 flex items-center'>
        <Marquees className='py-4'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='px-6 transition duration-200 ease-linear'
            >
              <Image src={tech.src} alt={tech.name} height={60} width={60} />
            </div>
          ))}
        </Marquees>
      </div>
    </section>
  );
};
export default TechStack;
