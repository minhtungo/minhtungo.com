import { getRecentlyPlayed, normalizeRecentlyPlayed } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await getRecentlyPlayed().catch((err) => {
    return NextResponse.json(
      {
        // prevent the error from being sent to the client
        recently_played: false,
        message: 'Are you connected?',
        extra: err,
      },
      {
        status: 200,
      }
    );
  });
  if (!res) {
    return NextResponse.json(
      {
        error: 'Spotify not available',
      },
      {
        status: 500,
      }
    );
  }

  if (res.status === 204 || res.status > 400) {
    return NextResponse.json(
      {
        recently_played: false,
      },
      {
        status: 200,
      }
    );
  }

  const { items = [] } = await res.json();

  const data = items
    .map(normalizeRecentlyPlayed)
    .sort((a: any, b: any) => b.played_at - a.played_at);

  return NextResponse.json(data, {
    status: 200,
  });
}
