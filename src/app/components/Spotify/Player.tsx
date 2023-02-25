import { AnimatedDiv } from '@/components';
import Image from '@/components/common/Image';
import Link from '@/components/common/Link';
import fetcher from '@/lib/fetcher';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { useMemo } from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

const Player = () => {
  const { data: currentSong } = useSWR('/api/spotify/now-playing', fetcher, {
    refreshInterval: 10 * 1000,
  });

  const progress = useMemo(
    () => currentSong && (currentSong.progress / currentSong.duration) * 100,
    [currentSong]
  );

  return (
    <AnimatedDiv className='max-w-[600px]' variants={PopUpFromBottom}>
      <div className='relative flex h-full flex-row items-center whitespace-pre-wrap break-words rounded border  border-custom-border-black bg-card-background-light p-3 text-sm hover:bg-card-background-light dark:border-transparent-white dark:bg-card-background-dark/10 dark:hover:bg-card-background-dark md:text-base'>
        <Link
          href={
            currentSong?.isPlaying
              ? `${currentSong.url}`
              : 'https://open.spotify.com/user/htnv9ntrl6mx2g0hbwmllbvqx?si=XAKVV0NWSOOnyOvZKGfYSg&nd=1'
          }
        >
          {currentSong?.isPlaying ? (
            <div className='h-auto w-auto'>
              <Image
                alt={currentSong.title}
                src={currentSong.thumbnail}
                width={60}
                height={60}
                className='h-full w-full'
              />
            </div>
          ) : (
            <SiSpotify className='h-10 w-10 fill-[#1DB954]' />
          )}
        </Link>
        <div className='ml-4 flex w-full flex-col'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex w-full flex-col'>
              <p className='font-semibold text-gray-700 dark:text-gray-100'>
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
            {currentSong?.isPlaying && (
              <div className='ml-4 flex animate-[spin_2s_linear_infinite] flex-row'>
                <Image
                  src='/static/images/player.svg'
                  alt='player'
                  width={60}
                  height={60}
                  className='h-10 w-10 sm:h-12 sm:w-12'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};
export default Player;
