'use client';

import { FadeContainer, PopUpFromBottom } from '@/lib/motion';

import { Card } from '@/components/ui/card';
import { FAVORITE_TECHS } from '@/lib/constants';
import { removeHoverAnimation, showHoverAnimation } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import AnimatedContainer from '@/components/common/AnimatedContainer';

const FavoriteTechs = () => {
  const { theme } = useTheme();

  return (
    <AnimatedContainer variants={FadeContainer} className='grid grid-cols-3 gap-2 sm:gap-2.5 xl:grid-cols-4' list>
      {FAVORITE_TECHS.map((tech) => (
        <li key={`${tech.name}-favorite-tech-box`}>
          <motion.div
            variants={PopUpFromBottom}
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => showHoverAnimation(e, theme === 'dark')}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => removeHoverAnimation(e)}
          >
            <Card className='flex origin-center overflow-hidden items-center justify-center gap-2.5 p-2 sm:p-2.5 sm:justify-start group sm:origin-top'>
              <div className='pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100'>
                {tech.icon}
              </div>
              <span className='pointer-events-none hidden select-none text-sm font-medium sm:inline-flex md:text-base'>
                {tech.name}
              </span>
            </Card>
          </motion.div>
        </li>
      ))}
    </AnimatedContainer>
  );
};
export default FavoriteTechs;
