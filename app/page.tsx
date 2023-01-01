import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Container, Hero } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <header>head</header>
      <main>
        <Container>
          <Hero title='hello' description='world' />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}
