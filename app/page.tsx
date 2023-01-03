import Image from 'next/image';
import { Inter, Roboto_Mono } from '@next/font/google';

import {
  Container,
  Hero,
  Repo,
  ContactForm,
  About,
  TechStack,
} from '../components';
import Tech from '../components/Tech';

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
          <Repo />
          <ContactForm />
          {/* <Tech /> */}
        </Container>
      </main>
    </>
  );
}
