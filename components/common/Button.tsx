import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes } from 'react';

import { motion } from 'framer-motion';
import { PopUp } from '../../lib/FramerMotionVariants';

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const buttonClasses = cva('relative rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
        '[&_.highlight]:ml-2 text-white dark:text-gray-100',
      ],
      secondary: [
        'bg-white border-transparent-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-colors ease-in text-gray-900 dark:text-gray-100',
      ],
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

const Button = ({
  children,
  disabled,
  href,
  variant,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  if (!href)
    return (
      <motion.div initial='hidden' animate='visible' variants={PopUp}>
        <button
          disabled={disabled}
          onClick={onClick}
          className={buttonClasses({
            variant,
            size,
            className: props.className,
          })}
        >
          {children}
        </button>
      </motion.div>
    );
  return (
    <motion.div initial='hidden' animate='visible' variants={PopUp}>
      <Link
        className={buttonClasses({ variant, size, className: props.className })}
        href={href} onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
