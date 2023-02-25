'use client';

import { Contact, Hero, Projects, Repo } from '@/components';
import { MetaData } from '@/components/Layout';
import Skills from '@/components/Skills';
import pageMeta from '@/config/meta';

interface HomeProps {
  projects: Project[];
  repos: Repo[];
}

export default function Home({ projects, repos }: HomeProps) {
  const { title, description } = pageMeta.home;

  return (
    <>
      <MetaData title={title} description={description} />
      <Hero />
      <Skills />
      <Projects projects={projects} home />
      <Repo repos={repos} home />
      <Contact home />
    </>
  );
}
