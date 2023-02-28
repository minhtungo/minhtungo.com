'use client';

import { ThemeProvider } from 'next-themes';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
      <ScrollToTop
        smooth
        className='primary-gradient !rounded-full'
        component={
          <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-gray-50 dark:text-gray-900' />
        }
      />
    </ThemeProvider>
  );
};
export default Provider;
