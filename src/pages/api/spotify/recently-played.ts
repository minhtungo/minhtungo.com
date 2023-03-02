import { getRecentlyPlayed, normalizeRecentlyPlayed } from '@/lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getRecentlyPlayed().catch((err) => {
    return res
      .status(200) // prevent the error from being sent to the client
      .json({
        recently_played: false,
        message: 'Are you connected?',
        extra: err,
      });
  });

  if (!response) {
    return res.status(500).json({ error: 'Spotify not available' });
  }

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ recently_played: false });
  }

  const { items = [] } = await response.json();

  const data = items
    .map(normalizeRecentlyPlayed)
    .sort((a, b) => b.played_at - a.played_at);

  return res.status(200).json(data);
}
