import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Container, Hero, HeroTitle, HeroSubtitle, Repo } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Hello</HeroTitle>
            <HeroSubtitle>World</HeroSubtitle>
          </Hero>
        <Repo />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}
