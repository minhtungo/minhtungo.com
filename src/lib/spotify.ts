import querystring from 'query-string';

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
  process.env;

const basicEncoded = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64');
const tokenEndpoint = 'https://accounts.spotify.com/api/token';
const baseEndpoint = 'https://api.spotify.com/v1';

/**
 * Get the access token from the Spotify API
 */
const getAccessToken = async () => {
  const body = querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token: SPOTIFY_REFRESH_TOKEN,
  });

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicEncoded}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  return response.json();
};

export const normalizeRecentlyPlayed = ({ track, played_at }) => ({
  title: track.name,
  artist: track.artists?.map(({ name }) => name).join(' - '),
  album: track.album?.name,
  thumbnail: track.album?.images[0]?.url,
  url: track.external_urls?.spotify,
  playedAt: played_at,
  duration: track.duration_ms,
});

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

  return fetch(`${baseEndpoint}/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRecentlyPlayed = async () => {
  const LIMIT = 4;
  const before = new Date().getTime();

  const params = querystring.stringify({ limit: LIMIT, before });

  const recentlyPlayedEndpoint = `https://api.spotify.com/v1/me/player/recently-played?${params}`;

  const { access_token: accessToken } = await getAccessToken();

  if (!accessToken) {
    return;
  }

  return fetch(recentlyPlayedEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export async function fetchRecentlyPlayedSongs() {
  const recentlyPlayedResponse = await fetch(
    `${process.env.BASE_URL}/api/spotify/recently-played`
  );

  const recentlyPlayed = await recentlyPlayedResponse.json();

  return recentlyPlayed;
}
