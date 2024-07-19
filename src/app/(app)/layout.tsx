import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/Header';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import { Metadata } from 'next';
import Providers from './Providers';
import './globals.css';
import Container from '@/components/common/Container';

export const metadata: Metadata = {
  title: {
    default: 'Home | Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description: 'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
            <NavBar />
            <Container tag='main'>{children}</Container>
            <Footer />
          </div>
        </Providers>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
