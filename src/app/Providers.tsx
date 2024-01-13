'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};
export default Provider;
