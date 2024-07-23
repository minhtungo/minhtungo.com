import { getNowPlaying, normalizeCurrentlyListening } from '@/lib/song';

export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await getNowPlaying();

  if (!response || !response.ok) {
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

  console.log(data);

  return Response.json(normalizeCurrentlyListening(data), {
    status: 200,
  });
}
