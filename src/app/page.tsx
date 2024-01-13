import { Contact } from '@/components/Contact';
import { Hero, Skills } from '@/components/Home';
import { Repos } from '@/components/Library';
import { Projects } from '@/components/Projects';

import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Minh Tu Ngo',
  description: 'My personal portfolio to showcase my work. Built with NextJS, Tailwind CSS and Sanity.',
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Suspense>
        <Projects home />
      </Suspense>
      <Suspense>
        <Repos home />
      </Suspense>
      <Contact home />
    </>
  );
}
