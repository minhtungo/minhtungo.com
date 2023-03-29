import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import mergeClassNames from '@/lib/mergeClassNames';

const headingVariants = cva('capitalize', {
  variants: {
    size: {
      default: 'text-xl md:text-2xl lg:text-3xl',
      sm: 'text-[15px] md:text-base',
      md: 'text-lg',
      lg: 'text-2xl md:text-4xl lg:text-5xl',
    },
    variant: {
      gradient: 'bg-clip-text text-transparent',
      default: 'text-gray-800 dark:text-gray-100',
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
