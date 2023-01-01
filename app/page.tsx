import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Container, Hero, HeroTitle, HeroSubtitle, Repo, ContactForm } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Hello</HeroTitle>
            <HeroSubtitle>World</HeroSubtitle>
          </Hero>
        <Repo />
        </Container>
      </main>
      <ContactForm />
    </>
  );
}
