import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';

import Providers from './Providers';
import { Inter } from 'next/font/google';
import ToastWrapper from './ToastWrapper';
import OnRouteChange from './OnRouteChange';
import { KBar } from '@/components/KBar';

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
    <html lang='en' className={inter.className}>
      <body className='mx-auto max-w-6xl px-6 xl:px-0'>
        <Providers>
          <KBar>
            <NavBar />
            {children}
            <Footer />
          </KBar>
        </Providers>
        <ToastWrapper />
        {/* <OnRouteChange /> */}
      </body>
    </html>
  );
}
