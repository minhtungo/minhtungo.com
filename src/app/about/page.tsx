import { client, journeyQuery } from '@/lib/sanity.client';
import { fetchRecentlyPlayedSongs } from '@/lib/spotify';
import type { Metadata } from 'next';
import { Container } from '@/app/components/Layout';
import { About } from '../components/About';

export const metadata: Metadata = {
  title: 'About | Minh Tu Ngo',
  description:
    'I am Minh Tu Ngo - A Front End Developer.  I love to create amazing web applications to make the internet a better place.',
};

const AboutPage = async () => {
  const journeys = await client.fetch(journeyQuery);
  const recentlyPlayedSongs = await fetchRecentlyPlayedSongs();

  return (
    <Container>
      <About journeys={journeys} recentlyPlayedSongs={recentlyPlayedSongs} />
    </Container>
  );
};
export default AboutPage;
