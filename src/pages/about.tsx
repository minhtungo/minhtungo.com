import { About, Journey, TechStack } from '@/components';
import { MetaData, Layout } from '@/components/Layout';
import { client, journeyQuery } from '@/lib/sanity.client';
import pageMeta from '@/config/meta';
import { fetchRecentlyPlayedSongs, getRecentlyPlayed } from '@/lib/spotify';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';

export const getStaticProps = async () => {
  const journeys = await client.fetch(journeyQuery);
  const response = await getRecentlyPlayed();
  const recentlyPlayedSongs = await response?.json();

  return {
    props: { journeys, recentlyPlayedSongs },
  };
};

const AboutPage = ({
  journeys,
  recentlyPlayedSongs,
}: {
  journeys: Journey[];
  recentlyPlayedSongs: any;
}) => {
  const { title, description } = pageMeta.about;
  return (
    <>
      <MetaData title={title} description={description} />
      <Layout>
        <About />
        <TechStack />
        <Journey journeys={journeys} />
        <RecentlyPlayed initialSongs={recentlyPlayedSongs} />
      </Layout>
    </>
  );
};
export default AboutPage;
