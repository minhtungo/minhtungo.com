import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Header } from '@/components';
import MDXComponents from '@/components/MDXComponents/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

import type { AppProps } from 'next/app';
const inter = Inter({ subsets: ['latin'] });

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
          <main className={`${inter.className} mx-auto max-w-6xl px-6 xl:px-0`}>
            <Component {...pageProps} />
          </main>
          <Toaster />
        </MDXProvider>
        <Footer />
        <ScrollToTop
          smooth
          className='primary-gradient !rounded-full'
          component={
            <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-gray-50 dark:text-gray-900' />
          }
        />
      </ThemeProvider>
    </SessionProvider>
  );
}
