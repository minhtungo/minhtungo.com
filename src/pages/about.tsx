import { About, Journey, TechStack } from '@/components';
import { Meta, Layout } from '@/components/Layout';
import { client, journeyQuery } from '@/lib/sanity.client';

export const getStaticProps = async () => {
  const journeys = await client.fetch(journeyQuery);

  return {
    props: { journeys },
  };
};

const AboutPage = ({ journeys }: { journeys: Journey[] }) => {
  return (
    <Layout pageTitle='About'>
      <About className='' />
      <TechStack />
      <Journey journeys={journeys} />
    </Layout>
  );
};
export default AboutPage;
