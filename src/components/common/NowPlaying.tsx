'use client';

import Spotify from '@/components/icons/Spotify';
import fetcher from '@/lib/fetcher';
import Image from 'next/image';
import { useMemo } from 'react';
import useSWR from 'swr';

const NowPlaying = () => {
  const { data: currentSong } = useSWR('/api/spotify/now-playing', fetcher, {
    refreshInterval: 60 * 1000 * 3,
  });

  const progress = useMemo(() => currentSong && (currentSong.progress / currentSong.duration) * 100, [currentSong]);

  return (
    <div className='relative flex items-center whitespace-pre-wrap break-words text-sm gap-x-3'>
      <a
        href={
          currentSong?.isPlaying
            ? `${currentSong.url}`
            : 'https://open.spotify.com/user/htnv9ntrl6mx2g0hbwmllbvqx?si=XAKVV0NWSOOnyOvZKGfYSg&nd=1'
        }
      >
        {currentSong?.isPlaying ? (
          <div className='animate-[spin_5s_linear_infinite]'>
            <Image
              alt={currentSong.title}
              src={currentSong.thumbnail}
              width={60}
              height={60}
              className='rounded-full size-14 object-contain'
            />
          </div>
        ) : (
          <Spotify className='size-8 fill-[#1DB954]' />
        )}
      </a>
      <div className='max-w-[250px]'>
        <div className='font-semibold text-foreground text-ellipsis overflow-hidden'>
          {currentSong?.isPlaying ? currentSong.title : 'Not Listening'}
        </div>
        {currentSong && currentSong.isPlaying && (
          <div className='text-xs font-medium text-muted-foreground'>{currentSong.artist}</div>
        )}
        {currentSong?.isPlaying && (
          <div className='mt-3 max-w-[200px] rounded-full bg-muted'>
            <div
              className={`primary-gradient h-1 rounded`}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default NowPlaying;
