import CodeSnippet from '@/components/about/CodeSnippet';
import Experience from '@/components/about/Experience';
import ProfileCard from '@/components/about/ProfileCard';
import SongPlayedRecently from '@/components/about/SongPlayedRecently';
import TechStack from '@/components/about/TechStack';
import PageTitle from '@/components/common/PageTitle';
import Section from '@/components/common/Section';
import Typography from '@/components/ui/typography';
import { ABOUT_ME } from '@/lib/constants';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div>
      <PageTitle title='About' subtitle='Sharing my passions and experiences with the world.' />
      <Section className='lg:gap-18 flex flex-col items-center justify-center gap-8 lg:flex-row-reverse'>
        <ProfileCard className='min-w-[300px]' />
        <div className='space-y-4'>
          {ABOUT_ME.map(({ description }, index) => (
            <Typography className='text-muted-foreground' key={`${index}-about-paragraph`}>
              {description}
            </Typography>
          ))}
        </div>
      </Section>
      <Section>
        <TechStack />
      </Section>
      <Section className='grid lg:grid-cols-5 gap-y-4 lg:gap-x-12'>
        <CodeSnippet className='lg:col-span-2 h-fit' />
        <Experience className='lg:col-span-3' />
      </Section>
      <Suspense>
        <Section>
          <Typography className='mb-2 md:mb-6' variant='h3'>
            Recently Played Songs
          </Typography>
          <SongPlayedRecently />
        </Section>
      </Suspense>
    </div>
  );
}
