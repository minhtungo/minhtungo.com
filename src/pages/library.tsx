import { Container, Projects, Repo } from '@/components';
import { Meta } from '@/components/Layout';
import { client, repoQuery } from '@/lib/sanity.client';

export const getStaticProps = async () => {
  const repos = await client.fetch(repoQuery);

  return {
    props: { repos },
  };
};

const LibraryPage = ({ repos }: { repos: Repo[] }) => {
  return (
    <>
      <Meta title='Library' />
      <Container className='pt-20'>
        <Repo repos={repos} />
      </Container>
    </>
  );
};
export default LibraryPage;
