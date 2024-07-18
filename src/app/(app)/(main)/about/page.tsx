import { About, Journey, TechStack } from '@/components/About';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

export default async function AboutPage() {
  return (
    <>
      <About />
      <TechStack />
      <Journey />
      <Suspense>
        <RecentlyPlayed />
      </Suspense>
    </>
  );
}
