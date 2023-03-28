import mergeClassNames from '@/lib/mergeClassNames';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { FC } from 'react';

const paragraphVariants = cva('mb-3', {
  variants: {
    variant: {
      default: 'text-gray-800 dark:text-gray-300',
      description: 'text-gray-600 dark:text-gray-400',
    },
    size: {
      default: 'text-sm sm:text-base',
      base: 'text-base',
      sm: 'text-sm sm:text-[15px]',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: FC<ParagraphProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={mergeClassNames(
        paragraphVariants({ size, className, variant })
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
