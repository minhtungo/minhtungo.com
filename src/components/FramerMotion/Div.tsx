'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedDivProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
  list?: boolean;
}

export default function AnimatedDiv({ variants, className, children, infinity, list }: AnimatedDivProps) {
  if (list) {
    return (
      <motion.ul initial='hidden' whileInView='visible' viewport={{ once: !infinity }} variants={variants} className={className} transition={{ staggerChildren: 0.5 }}>
        {children}
      </motion.ul>
    );
  }
  return (
    <motion.div initial='hidden' whileInView='visible' viewport={{ once: !infinity }} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
