import { Footer, Header } from '@/components';
import { Open_Sans } from '@next/font/google';
import type { Metadata } from 'next';
import Container from './components/Container';
import { Inter } from '@next/font/google';

import '@/styles/globals.css';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import NavBar from '@/components/Header/NavBar';
const inter = Inter({ subsets: ['latin'] });

const open_sans = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description:
    'My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.className} mx-auto max-w-6xl px-6 xl:px-0`}>
        {/* <Header />
        <Footer />
        <ScrollToTop
          smooth
          className='primary-gradient !rounded-full'
          component={
            <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-white' />
          }
        /> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
