'use client';

import Link from '@/components/common/Link';
import { PopUp } from '@/lib/framerVariants';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { AnchorHTMLAttributes } from 'react';

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const buttonClasses = cva('relative inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-gradient-to-r primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
        '[&_.highlight]:ml-2 text-gray-100 dark:text-gray-900 font-semibold',
      ],
      secondary: [
        'bg-white dark:border-transparent-black dark:bg-[#24292F] border border-gray-300 backdrop-filter-[12px] hover:bg-gray-300 dark:hover:bg-[#24292F]/70 transition-colors ease-in text-gray-900 dark:text-gray-300 font-semibold',
      ],
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-sm px-4 h-8 xl:text-base xl:px-4 xl:py-2',
    },
    rounded: {
      full: 'rounded-full',
      large: 'rounded-lg',
      medium: 'rounded-md',
      small: 'rounded-sm',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    rounded: 'small',
  },
});

const Button = ({
  children,
  disabled,
  href,
  variant,
  size,
  rounded,
  onClick,
  ...props
}: ButtonProps) => {
  if (!href)
    return (
      <motion.button
        disabled={disabled}
        onClick={onClick}
        className={buttonClasses({
          variant,
          size,
          rounded,
          className: props.className,
        })}
        initial='hidden'
        animate='visible'
        variants={PopUp}
      >
        {children}
      </motion.button>
    );
  return (
    <motion.div initial='hidden' animate='visible' variants={PopUp}>
      <Link
        className={buttonClasses({
          variant,
          size,
          rounded,
          className: props.className,
        })}
        href={href}
        animation={false}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
