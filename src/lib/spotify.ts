import querystring from 'query-string';

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

const basicEncoded = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

const getAccessToken = async () => {
  const body = querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  });

  const response = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT!, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicEncoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  return await response.json();
};

export type Song = {
  title: string;
  artist: string;
  album: string;
  thumbnail: string;
  url: string;
  playedAt: string;
  duration: number;
};

export const normalizeRecentlyPlayed = ({ track, played_at }: { track: any; played_at: string }): Song => ({
  title: track.name,
  artist: track.artists?.map(({ name }: { name: string }) => name).join(' - '),
  album: track.album?.name,
  thumbnail: track.album?.images[0]?.url,
  url: track.external_urls?.spotify,
  playedAt: played_at,
  duration: track.duration_ms,
});

export const getRecentlyPlayedSongs = async (): Promise<Song[]> => {
  const LIMIT = 4;
  const before = new Date().getTime();

  const recentlyPlayedEndpoint = `${process.env.SPOTIFY_API_BASE_URL}/v1/me/player/recently-played?limit=${LIMIT}&before=${before}`;

  const { access_token: accessToken } = await getAccessToken();

  if (!accessToken) {
    return [];
  }

  const response = await fetch(recentlyPlayedEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.items.map(normalizeRecentlyPlayed).sort((a: any, b: any) => b.played_at - a.played_at);
};

export const normalizeCurrentlyListening = ({
  is_playing,
  progress_ms,
  item,
}: {
  is_playing: boolean;
  progress_ms: number;
  item: any;
}) => ({
  id: item.id,
  isPlaying: is_playing,
  title: item.name,
  artist: item.artists?.map(({ name }: { name: string }) => name).join(' '),
  album: item.album?.name,
  thumbnail: item.album?.images[0]?.url,
  url: item.external_urls?.spotify,
  progress: progress_ms,
  duration: item.duration_ms,
});

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  if (!accessToken) {
    return;
  }

  return fetch(`${process.env.SPOTIFY_API_BASE_URL}/v1/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  // if (!response.ok) {
  //   return {
  //     error: 'Something went wrong',
  //     status: response.status,
  //   };
  // }

  // const data = await response.json();

  // return normalizeCurrentlyListening(data);
};
