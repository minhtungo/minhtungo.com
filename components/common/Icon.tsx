'use client';

import { motion } from 'framer-motion';

import { PopUp } from '../../lib/FramerMotionVariants';

interface IconProps {
  children: React.ReactNode;
}

const Icon = ({ children }: IconProps) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={PopUp}
      className='cursor-pointer'
      title='Toggle Theme'
    >
      {children}
    </motion.div>
  );
};

export default Icon;
