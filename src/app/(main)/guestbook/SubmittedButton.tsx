'use client';

import { Button } from '@/components/ui';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmittedButtonProps {}

const SubmittedButton: FC<SubmittedButtonProps> = () => {
  const { pending } = useFormStatus();
  return (
    <Button size='md' rounded='md' disabled={pending} isLoading={pending} type='submit'>
      Sign
    </Button>
  );
};

export default SubmittedButton;
