import LetConnect from '@/components/common/LetConnect';
import Section from '@/components/common/Section';
import Title from '@/components/common/Title';
import Repos from '@/components/repo/Repos';
import { Projects } from '@/components/Projects';
import FavoriteTechs from '@/components/Home/FavoriteTechs';
import Hero from '@/components/Home/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className='pt-0 sm:pt-0'>
        <Title title='Some technologies I have used recently' />
        <FavoriteTechs />
      </Section>
      <Section>
        <Projects />
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
