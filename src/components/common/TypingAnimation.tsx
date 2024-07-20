'use client';
import { useState, useEffect } from 'react';

import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = (content: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const CONTENT = [
    'I Love Building LEGO.',
    1000,
    'I Love Building Things For The Web.',
    1000,
    'I Love React.',
    1000,
    '',
  ];

  return <TypeAnimation cursor={true} speed={53} sequence={CONTENT} wrapper='p' repeat={Infinity} />;
};
export default TypingAnimation;
