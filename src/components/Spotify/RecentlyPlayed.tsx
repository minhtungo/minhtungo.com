'use client';

import { Image, Link } from '@/components/common';
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';
import { Div, Text } from '@/components/ui/FramerMotion';
import {
  FadeContainer,
  FromLeftChildren,
  OpacityVariant,
} from '@/lib/framerVariants';
import { motion } from 'framer-motion';
import { Heading } from '@/components/ui';

const RecentlyPlayed = ({ initialSongs }: { initialSongs: any }) => {
  const { data: songs } = useSWR('/api/spotify/recently-played', fetcher, {
    fallback: initialSongs,
  });

  return (
    <div className='mx-auto pt-8'>
      <Heading className='mb-2 md:mb-6' as='h3'>
        Recently Played Songs
      </Heading>
      <Div
        variants={FadeContainer}
        className='horizontal-scrollbar flex items-center gap-2 overflow-x-scroll md:gap-2 lg:overflow-hidden xl:gap-0'
      >
        {songs?.map((song, index) => (
          <Link
            className='group relative mx-auto w-full cursor-pointer text-white/80 shadow-md transition duration-200 ease-out hover:scale-[1.025] hover:text-gray-50 '
            href={song?.url}
            key={index}
            animation={false}
          >
            <motion.div variants={FromLeftChildren}>
              <div className='relative h-[360px] w-[260px] overflow-hidden rounded-lg shadow-lg'>
                <Image
                  src={song?.thumbnail}
                  alt={song?.title}
                  width={400}
                  height={400}
                  className='absolute inset-0 h-full w-full object-cover brightness-[.55] group-hover:brightness-[.85]'
                />
              </div>

              <div className='absolute inset-x-0 bottom-5 ml-3 flex items-center space-x-3'>
                <div className='w-[236px] break-words text-[15px]'>
                  <h4 className=' font-bold'>{song?.title}</h4>
                  <h6>{song?.artist}</h6>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </Div>
    </div>
  );
};
export default RecentlyPlayed;
