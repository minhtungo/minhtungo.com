import { Contact } from '@/components';
import { Layout, MetaData } from '@/components/Layout';
import pageMeta from '@/config/meta';

const LibraryPage = () => {
  const { title, description } = pageMeta.contact;
  return (
    <>
      <MetaData title={title} description={description} />
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};
export default LibraryPage;
