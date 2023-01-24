import Head from 'next/head';
import { Open_Sans } from '@next/font/google';
import ScrollToTop from 'react-scroll-to-top';
import { BiArrowToTop } from 'react-icons/bi';

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
  Journey,
} from '../components';
import {
  client,
  projectQuery,
  repoQuery,
  journeyQuery,
  resumeQuery,
} from '../lib/sanity.client';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const [projects, repos, journeys, resume] = await Promise.all([
    await client.fetch(projectQuery),
    await client.fetch(repoQuery),
    await client.fetch(journeyQuery),
    await client.fetch(resumeQuery),
  ]);
  const resumeURL = resume[0].resume;
  return {
    props: { projects, repos, journeys, resumeURL },
  };
};

interface HomeProps {
  projects: Project[];
  repos: Repo[];
  journeys: Journey[];
  resumeURL: string;
}

export default function Home({
  projects,
  repos,
  journeys,
  resumeURL,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Minh Tu Ngo Portfolio</title>
        <meta
          name='description'
          content='My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={open_sans.className}>
        <Header />
        <Container>
          <Hero resumeURL={resumeURL} />
          <About resumeURL={resumeURL} />
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
