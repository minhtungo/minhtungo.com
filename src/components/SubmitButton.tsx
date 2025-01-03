import LoaderButton from '@/components/LoaderButton';
import { ButtonProps } from '@/components/ui/button';
import React from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  console.log('pending', pending);
  return (
    <LoaderButton type='submit' isPending={pending} {...props}>
      {children}
    </LoaderButton>
  );
};

export default SubmitButton;
