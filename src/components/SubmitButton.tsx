'use client';

import { cn } from '@/lib/utils';
import { FC } from 'react';
import Spinner from './Spinner';
import { Button, ButtonProps } from '@/components/ui/button';

interface SubmitButtonProps extends ButtonProps {
  label: string;
  isPending?: boolean;
  type?: 'submit' | 'button';
  size?: 'sm' | 'default' | 'lg';
}

const SubmitButton: FC<SubmitButtonProps> = ({
  className,
  label,
  isPending,
  type = 'submit',
  size = 'default',
  ...props
}) => {
  return (
    <Button type={type} disabled={isPending} className={cn(className)} size={size} {...props}>
      {label}
      {isPending && <Spinner className='text-foreground' />}
    </Button>
  );
};

export default SubmitButton;
