import { About, Journey, TechStack } from '@/components';
import { MetaData, Layout } from '@/components/Layout';
import { client, journeyQuery } from '@/lib/sanity.client';
import pageMeta from '@/config/meta';

export const getStaticProps = async () => {
  const journeys = await client.fetch(journeyQuery);

  return {
    props: { journeys },
  };
};

const AboutPage = ({ journeys }: { journeys: Journey[] }) => {
  const { title, description } = pageMeta.about;
  return (
    <>
      <MetaData title={title} description={description} />
      <Layout>
        <About className='' />
        <TechStack />
        <Journey journeys={journeys} />
      </Layout>
    </>
  );
};
export default AboutPage;
