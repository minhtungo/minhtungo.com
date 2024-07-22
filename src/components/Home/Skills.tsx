'use client';

import { FadeContainer, PopUp } from '@/lib/framerVariants';

import Title from '@/components/common/Title';
import { FAVORITE_TECHS } from '@/lib/constants';
import { removeHoverAnimation, showHoverAnimation } from '@/lib/hoverAnimation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <>
      <Title title='Some technologies I have used recently' />
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={FadeContainer}
        viewport={{ once: true }}
        className='grid grid-cols-3 gap-2 sm:gap-2.5 xl:grid-cols-4'
      >
        {FAVORITE_TECHS.map((tech) => (
          <motion.div
            variants={PopUp}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => showHoverAnimation(e, theme === 'dark')}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => removeHoverAnimation(e)}
            key={`${tech.name}-box`}
            className='flex overflow-hidden items-center justify-center gap-2.5 rounded-lg border border-border/60 sm:border-border/80 bg-muted/10 p-2 sm:p-2.5 sm:justify-start group transition-all'
          >
            <div className='pointer-events-none relative select-none transition'>{tech.icon}</div>
            <span className='pointer-events-none hidden select-none text-sm font-medium sm:inline-flex md:text-base'>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
export default Skills;
