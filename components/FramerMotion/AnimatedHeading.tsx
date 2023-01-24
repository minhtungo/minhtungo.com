import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

interface AnimatedHeadingProps {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
}

export default function AnimatedHeading({
  variants,
  className,
  children,
  infinity,
}: AnimatedHeadingProps) {
  return (
    <motion.h2
      initial='hidden'
      whileInView='visible'
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}
