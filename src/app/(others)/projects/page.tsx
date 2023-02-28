import { Projects } from '@/components/Projects';
import { client, projectQuery } from '@/lib/sanity.client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Minh Tu Ngo',
  description:
    'My projects.  I love to create amazing web applications to make the internet a better place.',
};

export default async function ProjectsPage() {
  const projects = await client.fetch(projectQuery);

  return <Projects projects={projects} />;
}
