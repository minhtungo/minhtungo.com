'use client';

import { TYPING_CONTENT } from '@/lib/constants';
import { useState, useEffect } from 'react';

import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <TypeAnimation cursor={true} speed={53} sequence={TYPING_CONTENT} wrapper='p' repeat={Infinity} />;
};
export default TypingAnimation;
