import Image from 'next/image';
import { Inter, Roboto_Mono } from '@next/font/google';

import {
  Hero,
  Container,
  Repo,
  ContactForm,
  About,
  TechStack,
  Projects,
} from '../components';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({
  weight: '400',
});

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Repo />
          <ContactForm />
        </Container>
      </main>
    </>
  );
}
