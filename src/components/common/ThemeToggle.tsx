'use client';

import { useTheme } from 'next-themes';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { FC, useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface ThemeToggleProps {
  className?: string;
  variant?: any;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ className, variant = 'ghost' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className={cn('h-10 w-10', className)} />;
  }

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      moonColor='#FFE87C'
      sunColor='#e6c300'
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size={20}
    />
  );
};

export default ThemeToggle;
