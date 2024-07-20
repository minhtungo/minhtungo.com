import { Footer } from '@/components/Footer';
import Container from '@/components/common/Container';
import Header from '@/components/common/Header';
import { Metadata } from 'next';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Home | Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description:
    'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
            <Header />
            <Container tag='main'>{children}</Container>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
