'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
}

export default function AnimatedText({
  variants,
  className,
  children,
  infinity,
}: AnimatedTextProps) {
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
