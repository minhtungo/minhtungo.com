'use client';

import { Title } from '@/components/common';
import { Div } from '@/components/FramerMotion';
import { OpacityVariant } from '@/lib/framerVariants';

import ProfileCard from './ProfileCard';

const About = () => {
  return (
    <section id='about' className='mx-auto'>
      <Title
        title='About'
        subtitle={'Sharing my passions and experiences with the world'}
        className='lg:!mb-3'
      />
      <div className='lg:gap-18 flex flex-col items-center justify-center gap-8 lg:flex-row-reverse'>
        <ProfileCard />

        <div className='flex w-full flex-col items-center justify-center text-left lg:w-2/3'>
          <Div variants={OpacityVariant}>
            <div className='flex flex-col text-gray-800 dark:text-neutral-300 '>
              {/* <h3 className='secondary-gradient mb-2 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-3xl'>
                Minh Tu Ngo
              </h3> */}
              {/* <hr className='mb-3 border-b border-custom-border-black dark:border-transparent-white' /> */}
              <p className='mb-3 text-sm leading-relaxed sm:text-base'>
                {
                  'My journey in web development began with the classic "Hello World" console output, which ignited a deep passion for creating exceptional web experiences. Since then, I have continually strived to learn and get feedback to make myself better and improve.'
                }
              </p>
              <p className='mb-3 text-sm leading-relaxed  sm:text-base'>
                As a dedicated and passionate Web Developer, I specialize in
                using cutting-edge technologies such as React and NextJS to
                build powerful and scalable web application. I am focused on
                being a valuable part of any team I am on and I love working
                with dedicated teams to create amazing web applications to make
                the internet a better place.
              </p>
              <p className='mb-0 text-sm leading-relaxed  sm:text-base'>
                {
                  "I am constantly looking for new opportunities to learn and grow as a developer. If you're looking for a driven and enthusiastic team player to help create amazing web applications, let's work together!"
                }
              </p>
            </div>
          </Div>
        </div>
      </div>
    </section>
  );
};
export default About;
