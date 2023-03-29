import mergeClassNames from '@/lib/mergeClassNames';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

export const buttonVariants = cva(
  'inline-flex items-center transition-color focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative',
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
          '[&_.highlight]:ml-2 text-gray-100 dark:text-gray-900 font-semibold',
        ],
        secondary: [
          'bg-white dark:border-transparent-black dark:bg-[#24292F] border border-gray-300 backdrop-filter-[12px] hover:bg-gray-300 dark:hover:bg-[#24292F]/70 transition-colors ease-in text-gray-900 dark:text-gray-300 font-semibold',
        ],
        outline:
          'before:primary-gradient before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100',
        ghost:
          'bg-transparent hover:bg-gray-300 dark:hover:bg-gray-800/60 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent px-2 py-1',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        sm: 'text-xs px-3 h-7',
        md: 'text-sm px-4 h-8',
        lg: 'text-sm px-4 h-8 xl:text-base xl:px-4 xl:py-2',
      },
      rounded: {
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'sm',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={mergeClassNames(
          buttonVariants({ variant, size, rounded, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
