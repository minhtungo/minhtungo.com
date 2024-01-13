import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';
import { KBar } from '@/components/KBar';
import mergeClassNames from '@/lib/mergeClassNames';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import Providers from './Providers';
import ToastWrapper from './ToastWrapper';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description: 'Minh Tu Ngo Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={mergeClassNames(inter.className)}>
      <body className=''>
        <Providers>
          <KBar>
            <NavBar />
            <main className='relative mx-auto max-w-6xl px-6 xl:px-0'>{children}</main>
            <Footer />
          </KBar>
        </Providers>
        <ScrollToTopButton />
        <ToastWrapper />
      </body>
    </html>
  );
}
