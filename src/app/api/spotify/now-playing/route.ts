import { getNowPlaying, normalizeCurrentlyListening } from '@/lib/spotify';

export async function GET() {
  const response = await getNowPlaying();

  if (!response) {
    // return res.status(500).json({ error: 'Spotify not available' });
    return Response.json(
      { error: 'Spotify not available' },
      {
        status: 500,
      }
    );
  }

  if (response.status === 204 || response.status > 400) {
    return Response.json(
      { is_playing: false },
      {
        status: 200,
      }
    );
  }

  const data = await response.json();

  return Response.json(normalizeCurrentlyListening(data), {
    status: 200,
  });
}
