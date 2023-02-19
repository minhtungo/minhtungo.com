import { AnimatedDiv, Title } from '@/components';
import ProfileCard from '@/components/About/ProfileCard';
import { OpacityVariant, PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const About = ({ home, className }: { home?: boolean; className?: string }) => {
  return (
    <section id='about' className={classNames('', className)}>
      <Title
        title='About'
        subtitle={
          home
            ? 'Introduction'
            : 'Sharing my passions and experiences with the world'
        }
        home={home}
        className='md:!mb-2 xl:!mb-0'
      />
      <div className='lg:gap-18 flex flex-col items-center justify-center gap-8 md:flex-row-reverse'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={PopUpFromBottom}
          className='w-full lg:w-1/3'
        >
          <ProfileCard />
        </motion.div>
        <div className='flex w-full flex-col items-center justify-center text-left lg:w-2/3'>
          <AnimatedDiv variants={OpacityVariant}>
            <div className='flex flex-col'>
              <h3 className='secondary-gradient mb-2 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-3xl'>
                Minh Tu Ngo
              </h3>
              {/* <hr className='mb-3 border-b border-custom-border-black dark:border-transparent-white' /> */}
              <p className='mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base'>
                From the moment I produced {'"'}Hello World{'"'} in the console
                of my first application, I knew I was hooked into the world of
                web development. It has never been {'"'}just a job{'"'} for me,
                it{"'"}s offered an engaging challenge to continually learn and
                improve my skills in creating high-quality websites.
              </p>
              <p className='mb-0 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base'>
                I am a passionate Web Developer with experience building web
                apps using React, NextJS, TypeScript and NodeJS. I am focused on
                being a valuable part of any team I am on and believe in the
                team rising together. I love working with dedicated teams to
                create amazing web applications to make the internet a better
                place. Currently, I am looking for an opportunity to
                continuously learn, grow and make positive contributions to the
                company.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
export default About;
