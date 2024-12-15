'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Spinner from './Spinner';

interface LoaderButtonProps extends ButtonProps {
  isPending?: boolean;
}

const LoaderButton = ({
  className,
  children,
  isPending,
  type = 'submit',
  size = 'default',
  ...props
}: LoaderButtonProps) => {
  return (
    <Button type={type} disabled={isPending} className={cn(className)} size={size} {...props}>
      {children}
      {isPending && <Spinner className='text-foreground' />}
    </Button>
  );
};

export default LoaderButton;
