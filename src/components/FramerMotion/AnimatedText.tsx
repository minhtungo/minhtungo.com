
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

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
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
}
