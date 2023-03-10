import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';

import Providers from './Providers';
import { Inter } from 'next/font/google';
import ToastWrapper from './ToastWrapper';
import OnRouteChange from './OnRouteChange';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body className='mx-auto max-w-6xl px-6 xl:px-0'>
        <Providers>
          <NavBar />
          {children}
        </Providers>
        <ToastWrapper />
        <OnRouteChange />
        <Footer />
      </body>
    </html>
  );
}
