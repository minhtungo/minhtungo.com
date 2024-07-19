import { About, Journey, TechStack } from '@/components/about';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
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
