import { FromLeftVariant, PopUpFromBottom } from '@/lib/framerVariants';

import { Heading as AnimatedHeading, Text } from '@/components/ui/FramerMotion';
import { Image } from '@/components/common';
import { ItemGrid } from '@/components/Uses';

const Heading = {
  H2: ({ children }) => (
    <AnimatedHeading
      variants={FromLeftVariant}
      className='primary-gradient mb-2 bg-clip-text text-3xl font-semibold text-transparent lg:text-4xl lg:font-bold'
    >
      {children}
    </AnimatedHeading>
  ),
  H3: ({ children }) => (
    <h3 className='text-lg text-black dark:text-gray-50 md:text-xl lg:text-2xl'>
      {children}
    </h3>
  ),
};

const p = ({ children }) => (
  <Text
    variants={PopUpFromBottom}
    className='mt-2 mb-6 text-gray-900 dark:text-gray-200'
  >
    {children}
  </Text>
);

const ul = ({ children }) => (
  <ul className='mt-4 mb-6 list-disc pl-6'>{children}</ul>
);

const li = ({ children }) => <li className='mb-2 pl-2'>{children}</li>;

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

export function useMDXComponents(components) {
  return { ...MDXComponents, ...components };
}
