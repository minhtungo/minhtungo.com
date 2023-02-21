import { About, Journey, TechStack } from '@/components';
import { MetaData, Layout } from '@/components/Layout';
import { client, journeyQuery } from '@/lib/sanity.client';
import pageMeta from '@/config/meta';
import { fetchRecentlyPlayedSongs } from '@/lib/spotify';
import RecentlyPlayed from '@/components/Spotify/RecentlyPlayed';

export const getStaticProps = async () => {
  const journeys = await client.fetch(journeyQuery);
  const recentlyPlayedSongs = await fetchRecentlyPlayedSongs();

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
        <About className='' />
        <TechStack />
        <Journey journeys={journeys} />
        <RecentlyPlayed initialSongs={recentlyPlayedSongs} />
      </Layout>
    </>
  );
};
export default AboutPage;
