'use client';

import fetcher from '@/lib/fetcher';
import Image from 'next/image';
import { useMemo } from 'react';
import useSWR from 'swr';
import Spotify from '../icons/Spotify';

const NowPlaying = () => {
  const { data: currentSong } = useSWR('/api/spotify/now-playing', fetcher, {
    refreshInterval: 10 * 1000,
  });

  const progress = useMemo(() => currentSong && (currentSong.progress / currentSong.duration) * 100, [currentSong]);

  return (
    <div className='relative flex h-full flex-row items-center whitespace-pre-wrap break-words rounded text-sm gap-x-2 md:text-base'>
      <a
        href={
          currentSong?.isPlaying
            ? `${currentSong.url}`
            : 'https://open.spotify.com/user/htnv9ntrl6mx2g0hbwmllbvqx?si=XAKVV0NWSOOnyOvZKGfYSg&nd=1'
        }
      >
        {currentSong?.isPlaying ? (
          <div className='h-auto w-auto animate-[spin_5s_linear_infinite] '>
            <Image
              alt={currentSong.title}
              src={currentSong.thumbnail}
              width={60}
              height={60}
              className='h-full w-full rounded-full'
            />
          </div>
        ) : (
          <Spotify className='size-8 fill-[#1DB954]' />
        )}
      </a>
      <div className='flex w-full flex-row items-center justify-between'>
        <div className='flex w-full flex-col'>
          <div className='text-sm font-semibold text-muted-foreground '>
            {currentSong?.isPlaying ? currentSong.title : 'Not Listening'}
          </div>
          {currentSong && currentSong.isPlaying && (
            <div className='text-xs text-muted-foreground'>currentSong.artist</div>
          )}
          {currentSong?.isPlaying && (
            <div className='mt-2 flex w-full items-center justify-center'>
              <div className='flex w-full flex-row items-center justify-between rounded-full bg-gray-200'>
                <div
                  className={`primary-gradient h-1 rounded`}
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NowPlaying;
