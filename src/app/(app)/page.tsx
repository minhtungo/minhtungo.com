import { Contact } from '@/components/Contact';
import { Hero, Skills } from '@/components/Home';
import { Repos } from '@/components/Library';
import { Projects } from '@/components/Projects';

import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Suspense>
        <Projects />
      </Suspense>
      <Suspense>
        <Repos />
      </Suspense>
      <Contact />
    </>
  );
}
