import Meta from '@/components/Layout/Meta';
import { Open_Sans } from '@next/font/google';

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
  projectQuery,
  repoQuery,
  resumeQuery,
} from '@/lib/sanity.client';

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
      <Meta />
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
