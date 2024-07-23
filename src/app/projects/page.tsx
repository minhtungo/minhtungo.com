import PageTitle from '@/components/common/PageTitle';
import Projects from '@/components/projects/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  return (
    <>
      <PageTitle
        title='Projects'
        subtitle='My projects. I love to create amazing web applications to make the internet a better place.'
      />
      <Projects />
    </>
  );
}
