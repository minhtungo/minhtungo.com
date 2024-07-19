import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import mergeClassNames from '@/lib/mergeClassNames';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import ToastWrapper from './ToastWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Home | Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description: 'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={mergeClassNames(inter.className)}>
      <body className=''>
        <Providers>
          <NavBar />
          <main className='relative mx-auto max-w-6xl px-4 sm:px-6'>{children}</main>
          <Footer />
        </Providers>
        <ScrollToTopButton />
        <ToastWrapper />
      </body>
    </html>
  );
}
