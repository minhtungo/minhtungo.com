import { Contact, Hero, Journey, Projects, Repo } from '@/components';
import { Layout, Meta } from '@/components/Layout';
import {
  client,
  journeyQuery,
  projectHomeQuery,
  repoHomeQuery,
} from '@/lib/sanity.client';

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
    <Layout>
      <Hero />
      <Projects projects={projects} home />
      <Repo repos={repos} home />
      <Contact />
    </Layout>
  );
}
