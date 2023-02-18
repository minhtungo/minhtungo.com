import { Container, Projects } from '@/components';
import { Meta } from '@/components/Layout';
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
      <Container className='pt-20'>
        <Projects projects={projects} />
      </Container>
    </>
  );
};
export default ProjectsPage;
