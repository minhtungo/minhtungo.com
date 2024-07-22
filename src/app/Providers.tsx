'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
      <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
export default Provider;
