import LetConnect from '@/components/LetConnect';
import Section from '@/components/common/Section';
import Title from '@/components/Title';
import Repos from '@/components/Repos';
import FavoriteTechs from '@/components/FavoriteTechs';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ViewMoreButton from '@/components/ViewMoreButton';

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
        <Projects start={0} end={4} />
        <div className='text-center mt-6'>
          <ViewMoreButton href='/projects' />
        </div>
      </Section>
      <Section>
        <Title title='Some of My Other Contributions and Projects' subtitle='Repositories' />
        <Repos start={0} end={3} />
        <div className='text-center mt-8'>
          <ViewMoreButton href='/archive' />
        </div>
      </Section>
      <Section>
        <LetConnect />
      </Section>
    </>
  );
}
