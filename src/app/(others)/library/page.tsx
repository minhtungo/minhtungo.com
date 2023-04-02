import { Repos } from '@/components/Library';
import { client, repoQuery } from '@/lib/sanity.client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library | Minh Tu Ngo',
  description:
    'I love to create amazing web applications to make the internet a better place.',
};

export default async function LibraryPage() {
  const repos = await client.fetch(repoQuery);

  return <Repos repos={repos} />;
}
