import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import mergeClassNames from '@/lib/mergeClassNames';

const headingVariants = cva('capitalize', {
  variants: {
    variant: {
      gradient: 'bg-clip-text text-transparent',
      default: 'text-gray-800 dark:text-gray-200',
    },
    size: {
      default: 'text-lg md:text-xl lg:text-2xl',
      sm: 'text-[15px] md:text-base',
      md: 'text-lg',
      lg: 'text-2xl md:text-4xl lg:text-5xl',
    },
    weight: {
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
    weight: 'semibold',
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: string;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, variant, weight, as, children, ...props }, ref) => {
    if (as === 'h1') {
      return (
        <h1
          ref={ref}
          {...props}
          className={mergeClassNames(
            headingVariants({ size, variant, weight, className })
          )}
        >
          {children}
        </h1>
      );
    }
    if (as === 'h3') {
      return (
        <h3
          ref={ref}
          {...props}
          className={mergeClassNames(
            headingVariants({ size, variant, weight, className })
          )}
        >
          {children}
        </h3>
      );
    }
    return (
      <h2
        ref={ref}
        {...props}
        className={mergeClassNames(
          headingVariants({ size, variant, weight, className })
        )}
      >
        {children}
      </h2>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
