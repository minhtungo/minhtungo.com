import { Contact } from '@/app/components/Contact';
import { Hero, Skills } from '@/app/components/Home';
import { Repos } from '@/app/components/Library';
import { Projects } from '@/app/components/Projects';
import { client, projectHomeQuery, repoHomeQuery } from '@/lib/sanity.client';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home | Minh Tu Ngo',
  description:
    'My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.',
};

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
      <Hero />
      <Skills />
      <Projects projects={projects} home />
      <Repos repos={repos} />
      <Contact home />
    </>
  );
}
