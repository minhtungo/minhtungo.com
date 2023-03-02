import { NextResponse } from 'next/server';
import { getNowPlaying, normalizeCurrentlyListening } from '@/lib/spotify';

export async function GET(request: Request) {
  const res = await getNowPlaying();
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
        is_playing: false,
      },
      {
        status: 200,
      }
    );
  }

  const data = await res.json();

  return NextResponse.json(normalizeCurrentlyListening(data));
}
