'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

interface AnimatedDivProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
}

export default function AnimatedDiv({
  variants,
  className,
  children,
  infinity,
}: AnimatedDivProps) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      // style={style}
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
