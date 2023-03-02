'use client';

import fetcher from '@/lib/fetcher';
import useSWR from 'swr';
import { Div, Text } from '@/components/FramerMotion';
import { OpacityVariant, FadeContainer } from '@/lib/framerVariants';
import SongCard from './SongCard';

const RecentlyPlayed = ({ initialSongs }: { initialSongs: any }) => {
  const { data: songs } = useSWR('/api/spotify/recently-played', fetcher, {
    fallback: initialSongs,
  });

  return (
    <section id='recently-played-songs' className='mx-auto pt-8'>
      <Text
        className='mb-6 bg-clip-text text-lg font-semibold text-gray-800 dark:text-gray-300 md:text-xl lg:text-2xl'
        variants={OpacityVariant}
      >
        Recently Played Songs
      </Text>
      <Div
        variants={FadeContainer}
        className='horizontal-scrollbar flex items-center gap-2 overflow-y-hidden overflow-x-scroll md:gap-2 xl:gap-0'
      >
        {songs?.map((song, index) => (
          <SongCard song={song} key={index} />
        ))}
      </Div>
    </section>
  );
};
export default RecentlyPlayed;
