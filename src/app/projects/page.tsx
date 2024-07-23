import PageTitle from '@/components/common/PageTitle';
import ViewMoreButton from '@/components/common/ViewMoreButton';
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
      <div className='text-center mt-6'>
        <ViewMoreButton href='/archive' title='View Full Project Archive' />
      </div>
    </>
  );
}
