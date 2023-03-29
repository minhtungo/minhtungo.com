import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';
import mergeClassNames from '@/lib/mergeClassNames';

const headingVariants = cva('font-semibold', {
  variants: {
    size: {
      default: 'text-4xl md:text-5xl lg:text-6xl',
      lg: 'text-xl md:text-2xl lg:text-3xl',
      md: 'text-lg',
      sm: 'text-[15px] md:text-base',
    },
    variant: {
      gradient: 'bg-clip-text text-transparent',
      default: 'text-gray-800 dark:text-gray-100',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: string;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, variant, as, children, ...props }, ref) => {
    if (as === 'h1') {
      return (
        <h1
          ref={ref}
          {...props}
          className={mergeClassNames(
            headingVariants({ size, variant, className })
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
            headingVariants({ size, variant, className })
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
          headingVariants({ size, variant, className })
        )}
      >
        {children}
      </h2>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
