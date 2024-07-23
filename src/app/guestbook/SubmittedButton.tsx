'use client';

import SubmitButton from '@/components/common/SubmitButton';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmittedButtonProps {}

const SubmittedButton: FC<SubmittedButtonProps> = () => {
  const { pending } = useFormStatus();

  return <SubmitButton disabled={pending} isPending={pending} type='submit' label='Sign' />;
};

export default SubmittedButton;
