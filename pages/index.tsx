import Head from 'next/head';
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
import { client, projectQuery, repoQuery } from '../lib/sanity.client';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const [projects, repos] = await Promise.all([
    await client.fetch(projectQuery),
    await client.fetch(repoQuery),
  ]);

  return { props: { projects, repos } };
};

export default function Home({ projects, repos }: any) {
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
          <Projects projects={projects} />
          <Repo repos={repos} />
          <Contact />
        </Container>
        <Footer />
      </main>
    </>
  );
}
