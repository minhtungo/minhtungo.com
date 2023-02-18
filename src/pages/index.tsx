import Meta from '@/components/Layout/Meta';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

import {
  About,
  Contact,
  Container,
  Hero,
  Journey,
  Projects,
  Repo,
  TechStack,
} from '@/components';
import {
  client,
  journeyQuery,
  projectHomeQuery,
  repoQuery,
} from '@/lib/sanity.client';

export const getStaticProps = async () => {
  const [projects, repos, journeys] = await Promise.all([
    await client.fetch(projectHomeQuery),
    await client.fetch(repoQuery),
    await client.fetch(journeyQuery),
  ]);
  return {
    props: { projects, repos, journeys },
  };
};

interface HomeProps {
  projects: Project[];
  repos: Repo[];
  journeys: Journey[];
}

export default function Home({ projects, repos, journeys }: HomeProps) {
  return (
    <>
      <Meta />
      <Container className={inter.className}>
        <Hero />
        <About />
        <Journey journeys={journeys} />
        <TechStack />
        <Projects projects={projects} home />
        <Repo repos={repos} />
        <Contact />
      </Container>
    </>
  );
}
