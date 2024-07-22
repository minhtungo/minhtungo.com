import LetConnect from '@/components/common/LetConnect';
import Section from '@/components/common/Section';
import Title from '@/components/common/Title';
import Repos from '@/components/repo/Repos';
import FavoriteTechs from '@/components/Home/FavoriteTechs';
import Hero from '@/components/Home/Hero';
import Projects from '@/components/Projects/Projects';
import ViewMoreButton from '@/components/common/ViewMoreButton';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className='pt-0 sm:pt-0'>
        <Title title='Some technologies I have used recently' />
        <FavoriteTechs />
      </Section>
      <Section>
        <Title title='Some projects I have worked on' subtitle='Projects' />
        <Projects />
        <div className='text-center mt-6'>
          <ViewMoreButton href='/projects' />
        </div>
      </Section>
      <Section>
        <Title title='Some repos from Github profile' subtitle='Archive' />
        <Repos />
      </Section>
      <Section>
        <LetConnect />
      </Section>
    </>
  );
}
