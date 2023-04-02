import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';

import Providers from './Providers';
import { Inter } from 'next/font/google';
import ToastWrapper from './ToastWrapper';
import { KBar } from '@/components/KBar';
import mergeClassNames from '@/lib/mergeClassNames';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={mergeClassNames(inter.className)}>
      <body className=''>
        <Providers>
          <KBar>
            <NavBar />
            <main className='relative mx-auto max-w-6xl px-6 xl:px-0'>
              {children}
            </main>
            <Footer />
          </KBar>
        </Providers>
        <ToastWrapper />
      </body>
    </html>
  );
}
