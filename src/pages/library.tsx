import { Repo } from '@/components';
import { Layout, MetaData } from '@/components/Layout';
import { client, repoQuery } from '@/lib/sanity.client';
import pageMeta from '@/config/meta';

export const getStaticProps = async () => {
  const repos = await client.fetch(repoQuery);

  return {
    props: { repos },
  };
};

const LibraryPage = ({ repos }: { repos: Repo[] }) => {
  const { title, description } = pageMeta.library;
  return (
    <>
      <MetaData title={title} description={description} />
      <Layout>
        <Repo repos={repos} />
      </Layout>
    </>
  );
};
export default LibraryPage;
