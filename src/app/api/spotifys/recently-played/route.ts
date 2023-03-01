import { getRecentlyPlayed, normalizeRecentlyPlayed } from '@/lib/spotify';

export async function GET(request: Request) {
  try {
    const res = await getRecentlyPlayed();
    if (!res) {
      return Response.json({
        error: 'Spotify not available',
      });
    }

    if (res.status === 204 || res.status > 400) {
      return Response.json({
        recently_played: false,
      });
    }

    const { items = [] } = await res.json();

    const data = items
      .map(normalizeRecentlyPlayed)
      .sort((a: any, b: any) => b.played_at - a.played_at);

    return Response.json(data);
  } catch (error) {
    return Response.json({
      recently_played: false,
      message: 'Are you connected?',
      error,
    });
  }
}
