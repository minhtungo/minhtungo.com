import { cn } from '@/lib/utils';
import { FC } from 'react';

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={cn(
        'text-primary inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-primary-foreground',
        className
      )}
      role='status'
      aria-label='loading'
    />
  );
};

export default Spinner;
