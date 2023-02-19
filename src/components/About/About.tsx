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
        className='lg:!mb-3'
      />
      <div className='lg:gap-18 flex flex-col items-center justify-center gap-8 lg:flex-row-reverse'>
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
              {/* <h3 className='secondary-gradient mb-2 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-3xl'>
                Minh Tu Ngo
              </h3> */}
              {/* <hr className='mb-3 border-b border-custom-border-black dark:border-transparent-white' /> */}
              <p className='mb-3 text-sm leading-relaxed text-gray-700 dark:text-neutral-400 sm:text-base'>
                {
                  'My journey in web development began with the classic "Hello World" console output, which ignited a deep passion for creating exceptional web experiences. Since then, I have continually strived to learn and get feedback to make myself better and improve.'
                }
              </p>
              <p className='mb-3 text-sm leading-relaxed text-gray-700 dark:text-neutral-400 sm:text-base'>
                As a dedicated and passionate Web Developer, I specialize in
                using cutting-edge technologies such as React and NextJS to
                build powerful and scalable web application. I am focused on
                being a valuable part of any team I am on and I love working
                with dedicated teams to create amazing web applications to make
                the internet a better place.
              </p>
              <p className='mb-0 text-sm leading-relaxed text-gray-700 dark:text-neutral-400 sm:text-base'>
                {
                  "I am constantly looking for new opportunities to learn and grow as a developer. If you're looking for a driven and enthusiastic team player to help create amazing web applications, let's work together!"
                }
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
export default About;
