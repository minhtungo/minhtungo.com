import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Header } from '@/components';
import { ThemeProvider } from 'next-themes';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop
        smooth
        className='!rounded-full bg-primary-gradient'
        component={
          <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-white' />
        }
      />
    </ThemeProvider>
  );
}
