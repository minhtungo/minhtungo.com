import {
  About,
  Contact,
  Hero,
  Journey,
  Projects,
  Repo,
} from '@/components';

import {
  client,
  journeyQuery,
  projectQuery,
  resumeQuery,
  repoQuery,
} from '@/lib/sanity.client';

export default async function HomePage({}) {
  let projects, repos, journeys, resume;

  try {
    [projects, repos, journeys, resume] = await Promise.all([
      await client.fetch(projectQuery),
      await client.fetch(repoQuery),
      await client.fetch(journeyQuery),
      await client.fetch(resumeQuery),
    ]);
  } catch (error) {
    console.error(error);
  }

  const resumeURL = resume[0].resume;

  return (
    <>
      <Hero resumeURL={resumeURL} />
      <About resumeURL={resumeURL} />
      <Journey journeys={journeys} />
      <Projects projects={projects} />
      <Repo repos={repos} />
      <Contact />
    </>
  );
}
