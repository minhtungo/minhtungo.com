import Head from 'next/head';
import { Inter } from '@next/font/google';
import ScrollToTop from 'react-scroll-to-top';
import {BiArrowToTop} from 'react-icons/bi';

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
  Journey
} from '../components';
import { client, projectQuery, repoQuery, journeyQuery } from '../lib/sanity.client';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const [projects, repos, journeys] = await Promise.all([
    await client.fetch(projectQuery),
    await client.fetch(repoQuery),
    await client.fetch(journeyQuery),
  ]);

  return { props: { projects, repos, journeys } };
};

interface HomeProps {
  projects: Project[],
  repos: Repo[],
  journeys: Journey[]
}

export default function Home({ projects, repos, journeys }: HomeProps) {
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
          <Journey journeys={journeys} />
          <TechStack />
          <Projects projects={projects} />
          <Repo repos={repos} />
          <Contact />
        </Container>
        <Footer />
        <ScrollToTop
          smooth
          className='!rounded-full bg-primary-gradient'
          component={<BiArrowToTop className='mx-auto h-6 w-6 text-white' />}
        />
      </main>
    </>
  );
}
