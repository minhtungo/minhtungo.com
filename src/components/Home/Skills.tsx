'use client';

import { Title, IconHelper } from '@/components/common';
import { Div } from '@/components/FramerMotion';
import { FadeContainer, PopUp, PopUpFromBottom } from '@/lib/framerVariants';

import techStack from '@/config/techStack';
import { motion } from 'framer-motion';
import { showHoverAnimation, removeHoverAnimation } from '@/lib/hoverAnimation';
import { useTheme } from 'next-themes';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id='skills'>
      <Div variants={PopUpFromBottom}>
        <Title title='My Skills' home={true} />
      </Div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={FadeContainer}
        viewport={{ once: true }}
        className='lg: grid grid-cols-3 gap-2 sm:gap-3 xl:grid-cols-4'
      >
        {techStack.map((tech, index) => (
          <motion.div
            variants={PopUp}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
              showHoverAnimation(e, theme === 'dark')
            }
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
              removeHoverAnimation(e)
            }
            key={index}
            className='group flex origin-center items-center justify-center gap-4 rounded-sm border border-custom-border-black bg-card-background-light/30 p-2 hover:bg-card-background-light dark:border-transparent-white dark:bg-card-background-dark/10 dark:hover:bg-card-background-dark sm:justify-start sm:p-3 md:origin-top'
          >
            <div className='pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100'>
              <IconHelper type={tech.name} className='h-8 w-8' />
            </div>
            <p className='pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base'>
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Skills;
