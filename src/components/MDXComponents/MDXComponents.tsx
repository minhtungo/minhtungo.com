import { FromLeftVariant, PopUpFromBottom } from '@/lib/frammerVariants';
import { motion } from 'framer-motion';

import AnimatedHeading from '@/components/FramerMotion/AnimatedHeading';
import AnimatedText from '@/components/FramerMotion/AnimatedText';
import Image from '../common/Image';
import ItemGrid from './ItemGrid';

interface Props {
  children: React.ReactElement;
}

const Heading = {
  H2: ({ children }: Props) => (
    <AnimatedHeading
      variants={FromLeftVariant}
      className='primary-gradient mb-3 bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
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
      className='text-lg text-black dark:text-gray-50 md:text-xl lg:text-2xl'
    >
      {children}
    </motion.h3>
  ),
};

const p = ({ children }: Props) => (
  <AnimatedText
    variants={PopUpFromBottom}
    className='mt-2 mb-6 text-gray-900 dark:text-gray-200'
  >
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

const li = ({ children }: Props) => <li className='mb-2 pl-2'>{children}</li>;

const MDXComponents = {
  h2: Heading.H2,
  h3: Heading.H3,
  p,
  li,
  ul,
  Image,
  // Custom components
  ItemGrid,
};

export default MDXComponents;
