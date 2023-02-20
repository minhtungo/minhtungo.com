import { Projects } from '@/components';
import { MetaData, Layout } from '@/components/Layout';
import { client, projectQuery } from '@/lib/sanity.client';
import pageMeta from '@/config/meta';

export const getStaticProps = async () => {
  const projects = await client.fetch(projectQuery);

  return {
    props: { projects },
  };
};

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  const { title, description } = pageMeta.projects;
  return (
    <>
      <MetaData title={title} description={description} />
      <Layout>
        <Projects projects={projects} />
      </Layout>
    </>
  );
};
export default ProjectsPage;
