import { About, Container, Journey, TechStack } from '@/components';
import { Meta } from '@/components/Layout';
import { client, journeyQuery } from '@/lib/sanity.client';

export const getStaticProps = async () => {
  const journeys = await client.fetch(journeyQuery);

  return {
    props: { journeys },
  };
};

const AboutPage = ({ journeys }: { journeys: Journey[] }) => {
  return (
    <>
      <Meta title='About' />
      <Container className='pt-20'>
        <About className='' />
        <TechStack />
        <Journey journeys={journeys} />
      </Container>
    </>
  );
};
export default AboutPage;
