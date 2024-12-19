import PageSection from '@/components/common/PageSection';
import FavoriteTechs from '@/components/FavoriteTechs';
import Hero from '@/components/Hero';
import LetConnect from '@/components/LetConnect';
import Projects from '@/components/Projects';
import Repos from '@/components/Repos';
import ViewMoreButton from '@/components/ViewMoreButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PageSection className='pt-0 sm:pt-0' title='Technologies I’ve Been Working with Recently' subtitle='Adventures'>
        <FavoriteTechs />
      </PageSection>
      <PageSection
        title={`Discover What I've Built`}
        subtitle='Projects'
        className='flex flex-col items-center gap-y-6'
      >
        <Projects start={0} end={4} />
        <ViewMoreButton href='/projects' />
      </PageSection>
      <PageSection
        title='Some of My Other Contributions and Projects'
        subtitle='Repositories'
        className='flex flex-col items-center gap-y-6'
      >
        <Repos start={0} end={3} />
        <ViewMoreButton href='/archive' />
      </PageSection>
      <PageSection>
        <LetConnect />
      </PageSection>
    </>
  );
}
