import { Contact } from '@/components/Contact';
import { Hero, Skills } from '@/components/Home';
import { Repos } from '@/components/Library';
import { Projects } from '@/components/Projects';

import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Suspense>
        <Projects isHome />
      </Suspense>
      <Suspense>
        <Repos home />
      </Suspense>
      <Contact home />
    </>
  );
}
