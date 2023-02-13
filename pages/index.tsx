import { Open_Sans } from '@next/font/google';
import Head from 'next/head';

import {
  About,
  Contact,
  Container,
  Hero,
  Journey,
  Projects,
  Repo,
  TechStack,
} from '../components';
import {
  client,
  journeyQuery,
  projectQuery,
  repoQuery,
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
        <title>Minh Tu Ngo</title>
        <meta
          name='description'
          content='My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Hero resumeURL={resumeURL} />
        <About />
        <Journey journeys={journeys} />
        <TechStack />
        <Projects projects={projects} />
        <Repo repos={repos} />
        <Contact />
      </Container>
    </>
  );
}
