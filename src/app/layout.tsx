import { Container, Footer, Header } from '@/components';
import { Open_Sans } from '@next/font/google';

import '@/styles/globals.css';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Minh Tu Ngo',
  },
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
      <body>
        <Header />
        <Container className={open_sans.className}>{children}</Container>
        <Footer />
        <ScrollToTop
          smooth
          className='!rounded-full bg-primary-gradient'
          component={
            <MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-white' />
          }
        />
      </body>
    </html>
  );
}
