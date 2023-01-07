import Head from 'next/head';
import { Inter } from '@next/font/google';

import {
  Hero,
  Container,
  Repo,
  ContactForm,
  About,
  TechStack,
  Projects,
  Header,
  Footer,
} from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Minh Tu Ngo</title>
        <meta name='description' content='Minh Tu Ngo Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <Container>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Repo />
    
        </Container>
        <Footer />
      </main>
    </>
  );
}
