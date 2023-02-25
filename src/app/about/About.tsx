'use client';

import { About, Journey, TechStack } from '@/components';
import { Layout, MetaData } from '@/components/Layout';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';
import pageMeta from '@/config/meta';

const AboutPage = ({
  journeys,
  recentlyPlayedSongs,
}: {
  journeys: Journey[];
  recentlyPlayedSongs: any;
}) => {
  return (
    <>
      <About />
      <TechStack />
      <Journey journeys={journeys} />
      <RecentlyPlayed initialSongs={recentlyPlayedSongs} />
    </>
  );
};

export default AboutPage;
