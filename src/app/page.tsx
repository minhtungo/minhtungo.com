import { Contact, Hero, Journey, Projects, Repo } from '@/components';
import Skills from '@/components/Skills';
import { client, projectHomeQuery, repoHomeQuery } from '@/lib/sanity.client';
import Home from './HomePage';

export default async function HomePage() {
  let projects, repos;

  try {
    [projects, repos] = await Promise.all([
      await client.fetch(projectHomeQuery),
      await client.fetch(repoHomeQuery),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Home projects={projects} repos={repos} />
    </>
  );
}
