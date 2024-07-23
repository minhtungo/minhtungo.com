import LetConnect from '@/components/common/LetConnect';
import Section from '@/components/common/Section';
import Title from '@/components/common/Title';
import Repos from '@/components/repo/Repos';
import FavoriteTechs from '@/components/home/FavoriteTechs';
import Hero from '@/components/home/Hero';
import Projects from '@/components/projects/Projects';
import ViewMoreButton from '@/components/common/ViewMoreButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className='pt-0 sm:pt-0'>
        <Title title='Technologies I’ve Been Working with Recently' subtitle='Adventures' />
        <FavoriteTechs />
      </Section>
      <Section>
        <Title title={`Discover What I've Built`} subtitle='Projects' />
        <Projects />
        <div className='text-center mt-6'>
          <ViewMoreButton href='/projects' />
        </div>
      </Section>
      <Section>
        <Title title='Some of My Other Contributions and Projects' subtitle='Repositories' />
        <Repos />
        <div className='text-center mt-6'>
          <ViewMoreButton href='/archive' />
        </div>
      </Section>
      <Section>
        <LetConnect />
      </Section>
    </>
  );
}
