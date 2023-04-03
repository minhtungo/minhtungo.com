'use client';

import mergeClassNames from '@/lib/mergeClassNames';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import Link from './Link';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { motion } from 'framer-motion';

export const buttonVariants = cva(
  'relative inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed font-semibold',
  {
    variants: {
      variant: {
        primary: [
          'bg-blue-500 dark:bg-blue-400 hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
          '[&_.highlight]:ml-2 text-gray-100 dark:text-gray-900',
        ],
        secondary: [
          'border border-custom-border-black bg-card-background-light/30 hover:bg-card-background-light dark:border-transparent-white dark:bg-card-background-dark/40 dark:hover:bg-card-background-dark hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] shadow-md',
        ],
        outline:
          'before:primary-gradient before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:rounded before:transition-transform before:duration-300 before:ease-in-out before:content-[""] hover:before:origin-left hover:before:scale-x-100',
        ghost:
          'bg-transparent hover:bg-gray-300 dark:hover:bg-zinc-800 px-2 py-1',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        sm: 'text-xs px-3 h-7',
        md: 'text-sm px-4 h-8',
        lg: 'text-sm px-4 h-9 md:text-[14.75px]',
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
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, rounded, href, ...props }, ref) => {
    return (
      <motion.div initial='hidden' animate='visible' variants={PopUpFromBottom}>
        {href ? (
          <Link
            href={href}
            className={mergeClassNames(
              buttonVariants({ variant, size, rounded, className })
            )}
          >
            {children}
          </Link>
        ) : (
          <button
            className={mergeClassNames(
              buttonVariants({ variant, size, rounded, className })
            )}
            ref={ref}
            {...props}
          >
            {children}
          </button>
        )}
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export default Button;
