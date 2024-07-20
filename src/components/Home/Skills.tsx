'use client';

import { FadeContainer, PopUp } from '@/lib/framerVariants';

import Title from '@/components/common/Title';
import { FAVORITE_TECHS } from '@/lib/constants';
import { removeHoverAnimation, showHoverAnimation } from '@/lib/hoverAnimation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

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
        className='grid grid-cols-3 gap-2 sm:gap-3 xl:grid-cols-4'
      >
        {FAVORITE_TECHS.map((tech) => (
          <motion.div
            variants={PopUp}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => showHoverAnimation(e, theme === 'dark')}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => removeHoverAnimation(e)}
            key={`${tech.name}-box`}
            className='flex origin-center items-center justify-center gap-4 rounded-sm border bg-muted/10 p-2 sm:p-3 sm:justify-start md:origin-top'
          >
            <div className='pointer-events-none relative select-none transition'>
              <Image src={tech.src} width={32} height={32} className='size-8' alt={tech.name} />
            </div>
            <span className='pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base'>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
export default Skills;
