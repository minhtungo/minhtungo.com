import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Header } from '@/components';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import MDXComponents from '@/components/MDXComponents/MDXComponents';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Header />
        {/* @ts-ignore */}
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
        <Footer />
        <ScrollToTop
          smooth
          className='!rounded-full bg-primary-gradient'
          component={
            <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-white' />
          }
        />
      </ThemeProvider>
    </SessionProvider>
  );
}
