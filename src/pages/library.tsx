import { Repo } from '@/components';
import { Layout, Meta } from '@/components/Layout';
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
      <Layout>
        <Repo repos={repos} />
      </Layout>
    </>
  );
};
export default LibraryPage;
