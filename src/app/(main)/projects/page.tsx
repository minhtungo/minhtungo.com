import { Projects } from '@/components/Projects';

import { getPayload } from '@/lib/payload';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My projects.  I love to create amazing web applications to make the internet a better place.',
};

export default async function ProjectsPage() {
  const payload = await getPayload();

  const projects = await payload.find({
    collection: 'projects',
  });

  console.log(projects.docs);

  return <Projects />;
}
