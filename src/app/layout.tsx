import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Metadata } from 'next';
import Providers from './Providers';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Home | Minh Tu Ngo',
    template: '%s | Minh Tu Ngo',
  },
  description: 'I am Minh Tu Ngo.  I love to create amazing web applications to make the internet a better place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Providers>
          <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto] grid-col'>
            <Header />
            <Container tag='main'>{children}</Container>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
