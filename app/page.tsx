import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Container, Hero, Repo, ContactForm, About } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Hero />
          <Repo />
          <ContactForm />
          <About />
        </Container>
      </main>
    </>
  );
}
