import { Contact } from '@/components/Contact';
import { Hero, Skills } from '@/components/Home';
import { Repos } from '@/components/Library';
import { Projects } from '@/components/Projects';
import { client, projectHomeQuery, repoHomeQuery } from '@/lib/sanity.client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minh Tu Ngo',
  description:
    'My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.',
};

export default async function HomePage() {
  let projects, repos;

  [projects, repos] = await Promise.all([
    await client.fetch(projectHomeQuery),
    await client.fetch(repoHomeQuery),
  ]);

  return (
    <main>
      <Hero />
      <Skills />
      <Projects projects={projects} home />
      <Repos repos={repos} home />
      <Contact home />
    </main>
  );
}
