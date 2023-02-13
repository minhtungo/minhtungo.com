import { FromLeftVariant, PopUpFromBottom } from '@/lib/FramerMotionVariants';
import { motion } from 'framer-motion';
import AnimatedHeading from '../FramerMotion/AnimatedHeading';
import AnimatedText from '../FramerMotion/AnimatedText';

interface Props {
  children: React.ReactElement;
}

const Heading = {
  H2: ({ children }: Props) => (
    <AnimatedHeading
      variants={FromLeftVariant}
      className='text-3xl lg:text-4xl font-semibold lg:font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-600 bg-[length:400%_400%] animate-border'
    >
      {children}
    </AnimatedHeading>
  ),
  H3: ({ children }: Props) => (
    <motion.h3
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={PopUpFromBottom}
      className='text-lg md:text-xl lg:text-2xl text-black dark:text-white'
    >
      {children}
    </motion.h3>
  ),
};

const p = ({ children }: Props) => (
  <AnimatedText variants={PopUpFromBottom} className='mt-2 mb-6'>
    {children}
  </AnimatedText>
);

const ul = ({ children }: Props) => (
  <motion.ul
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    variants={PopUpFromBottom}
    className='mt-4 mb-6 list-disc pl-6'
  >
    {children}
  </motion.ul>
);

const li = ({ children }: Props) => <li className='pl-2 mb-2'>{children}</li>;

const MDXComponents = {
  h2: Heading.H2,
  h3: Heading.H3,
  p,
  li,
  ul,
};

export default MDXComponents;
