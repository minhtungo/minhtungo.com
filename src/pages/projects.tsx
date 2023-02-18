import { AnimatedHeading, Container, Projects, Title } from '@/components';
import { Meta } from '@/components/Layout';
import { FromLeftVariant } from '@/lib/framerVariants';
import { client, projectQuery } from '@/lib/sanity.client';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const projects = await client.fetch(projectQuery);

  return {
    props: { projects },
  };
};

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <Meta title='Guestbook' />
      <Container className='pt-20'>
        <Projects projects={projects} className='lg:pt-1' />
      </Container>
    </>
  );
};
export default ProjectsPage;
