import { Contact } from '@/components/Contact';
import { Hero, Skills } from '@/components/Home';
import { Repos } from '@/components/Library';
import { Projects } from '@/components/Projects';
import { client, projectHomeQuery } from '@/lib/sanity.client';

import { Suspense } from 'react';

export default async function HomePage() {
  const projects = await client.fetch(projectHomeQuery);

  return (
    <>
      <Hero />
      <Skills />
      <Suspense>
        <Projects home projects={projects} />
      </Suspense>
      <Suspense>
        <Repos home />
      </Suspense>
      <Contact home />
    </>
  );
}
