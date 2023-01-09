import Head from 'next/head';
// import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { Inter } from '@next/font/google';

import {
  Hero,
  Container,
  Repo,
  Contact,
  About,
  TechStack,
  Projects,
  Header,
  Footer,
} from '../components';
import { client } from '../lib/sanity.client';

const inter = Inter({ subsets: ['latin'] });

const query = groq`
  *[_type == "project"] {
    ...,
  } 
`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

export default function Home({ data }: any) {
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
          <Projects projects={data} />
          <Repo />
          <Contact />
        </Container>
        <Footer />
      </main>
    </>
  );
}
