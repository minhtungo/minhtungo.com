import mergeClassNames from '@/lib/mergeClassNames';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { FC } from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-gray-800 dark:text-gray-300',
      description: 'text-gray-600 dark:text-gray-400',
      title: 'text-gray-800 dark:text-gray-300 font-semibold',
    },
    size: {
      default: 'text-sm sm:text-base',
      sm: 'text-sm sm:text-[15px]',
      md: 'text-[15px] md:text-base',
      base: 'text-base',
      lg: 'text-[17px] md:text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: string;
}

const Text: FC<TextProps> = ({
  className,
  size,
  variant,
  as,
  children,
  ...props
}) => {
  if (as === 'span') {
    return (
      <span
        {...props}
        className={mergeClassNames(textVariants({ size, className, variant }))}
      >
        {children}
      </span>
    );
  }
  return (
    <p
      {...props}
      className={mergeClassNames(textVariants({ size, className, variant }))}
    >
      {children}
    </p>
  );
};

export default Text;
