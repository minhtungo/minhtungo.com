import {
  About,
  AnimatedHeading,
  Container,
  Journey,
  Projects,
  Title,
} from '@/components';
import { Meta } from '@/components/Layout';
import { FromLeftVariant } from '@/lib/framerVariants';

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
      <Meta title='Projects' />
      <Container className='pt-20'>
        <About className='lg:pt-1' />
        <Journey journeys={journeys} />
      </Container>
    </>
  );
};
export default AboutPage;
