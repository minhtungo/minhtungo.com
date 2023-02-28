import { About, Journey, TechStack } from '@/components/About';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';

import { client, journeyQuery } from '@/lib/sanity.client';
import { fetchRecentlyPlayedSongs } from '@/lib/spotify';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Minh Tu Ngo',
  description:
    'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

export default async function AboutPage() {
  const journeys = await client.fetch(journeyQuery);
  const recentlyPlayedSongs = await fetchRecentlyPlayedSongs();

  return (
    <>
      <About />
      <TechStack />
      <Journey journeys={journeys} />
      <RecentlyPlayed initialSongs={recentlyPlayedSongs} />
    </>
  );
}
