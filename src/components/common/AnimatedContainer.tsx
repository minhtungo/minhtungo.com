'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedContainerProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
  list?: boolean;
  tag?: 'div' | 'ul' | 'footer';
}

export default function AnimatedContainer({ variants, className, children, infinity, list }: AnimatedContainerProps) {
  if (list) {
    return (
      <motion.ul
        initial='hidden'
        whileInView='visible'
        viewport={{ once: !infinity }}
        variants={variants}
        className={className}
        transition={{ staggerChildren: 0.5 }}
      >
        {children}
      </motion.ul>
    );
  }
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
