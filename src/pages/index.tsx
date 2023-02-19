import {
  Contact,
  Container,
  Hero,
  Journey,
  Projects,
  Repo,
  TechStack,
} from '@/components';
import Meta from '@/components/Layout/Meta';
import {
  client,
  journeyQuery,
  projectHomeQuery,
  repoHomeQuery,
} from '@/lib/sanity.client';
import Link from 'next/link';

export const getStaticProps = async () => {
  const [projects, repos, journeys] = await Promise.all([
    await client.fetch(projectHomeQuery),
    await client.fetch(repoHomeQuery),
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
      <Container>
        <Hero />
        <Projects projects={projects} home />
        <Repo repos={repos} home />
        <Contact />
      </Container>
    </>
  );
}
