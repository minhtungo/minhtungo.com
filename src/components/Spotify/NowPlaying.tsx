'use client';

import { Div } from '@/components/FramerMotion';
import Image from '@/components/common/Image';
import Link from '@/components/common/Link';
import fetcher from '@/lib/fetcher';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { useMemo } from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

const NowPlaying = () => {
  const { data: currentSong } = useSWR('/api/spotify/now-playing', fetcher, {
    refreshInterval: 10 * 1000,
  });

  const progress = useMemo(
    () => currentSong && (currentSong.progress / currentSong.duration) * 100,
    [currentSong]
  );

  return (
    <Div className='w-full max-w-[450px]' variants={PopUpFromBottom}>
      <div className='relative flex h-full flex-row items-center whitespace-pre-wrap break-words rounded text-sm  md:text-base'>
        <Link
          href={
            currentSong?.isPlaying
              ? `${currentSong.url}`
              : 'https://open.spotify.com/user/htnv9ntrl6mx2g0hbwmllbvqx?si=XAKVV0NWSOOnyOvZKGfYSg&nd=1'
          }
          animation={false}
        >
          {currentSong?.isPlaying ? (
            <div className='h-auto w-auto animate-[spin_5s_linear_infinite] '>
              <Image
                alt={currentSong.title}
                src={currentSong.thumbnail}
                width={60}
                height={60}
                className='h-full w-full rounded-full '
              />
            </div>
          ) : (
            <SiSpotify className='h-9 w-9 fill-[#1DB954]' />
          )}
        </Link>
        <div className='ml-4 flex w-full flex-col'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex w-full flex-col'>
              <p className='text-xs font-semibold text-gray-700 dark:text-gray-100 sm:text-sm'>
                {currentSong?.isPlaying ? currentSong.title : 'Not Listening'}
              </p>
              <p className='text-xs text-gray-600 dark:text-gray-300 sm:text-sm'>
                {currentSong?.isPlaying ? currentSong.artist : 'Spotify'}
              </p>
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
      </div>
    </Div>
  );
};
export default NowPlaying;
