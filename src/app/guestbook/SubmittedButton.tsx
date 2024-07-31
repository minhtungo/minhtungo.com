'use client';

import SubmitButton from '@/components/common/SubmitButton';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmittedButtonProps {
  size?: 'sm' | 'default' | 'lg';
}

const SubmittedButton: FC<SubmittedButtonProps> = ({ size = 'default' }) => {
  const { pending } = useFormStatus();

  return <SubmitButton disabled={pending} isPending={pending} type='submit' label='Sign' size={size} />;
};

export default SubmittedButton;
