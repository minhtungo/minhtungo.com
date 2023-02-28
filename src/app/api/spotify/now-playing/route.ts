import { getNowPlaying, normalizeCurrentlyListening } from '@/lib/spotify';

export async function GET(request: Request) {
  try {
    const res = await getNowPlaying();
    if (!res) {
      return Response.json({
        error: 'Spotify not available',
      });
    }

    if (res.status === 204 || res.status > 400) {
      return Response.json({
        is_playing: false,
      });
    }

    const data = await res.json();

    return Response.json(normalizeCurrentlyListening(data));
  } catch (error) {
    return Response.json({
      recently_played: false,
      message: 'Are you connected?',
      error,
    });
  }
}
