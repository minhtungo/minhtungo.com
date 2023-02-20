import type { NextApiRequest, NextApiResponse } from 'next';

import { getTopTracks } from '@/lib/spotify';

type Artist = {
  name: string;
};

interface TopTracksProps {
  title: string;
  artist: Artist[];
  url: string;
  coverImage: {
    url: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks();
  console.log(response);
  const { items } = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(items);
}
