import { Projects } from '@/components';
import { Meta, Layout } from '@/components/Layout';
import { client, projectQuery } from '@/lib/sanity.client';

export const getStaticProps = async () => {
  const projects = await client.fetch(projectQuery);

  return {
    props: { projects },
  };
};

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <Meta title='Projects' />
      <Layout>
        <Projects projects={projects} />
      </Layout>
    </>
  );
};
export default ProjectsPage;
