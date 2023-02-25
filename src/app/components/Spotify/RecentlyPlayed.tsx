import { Image, Link } from '@/app/components/common';
import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const RecentlyPlayed = ({ initialSongs }: { initialSongs: any }) => {
  const { data: songs } = useSWR('/api/spotify/recently-played', fetcher, {
    fallback: initialSongs,
  });

  return (
    <section id='recently-played-songs' className='mx-auto pt-8'>
      <h3 className='mb-6 bg-clip-text text-lg font-semibold text-gray-800 dark:text-gray-300 md:text-xl lg:text-2xl'>
        Recently Played Songs
      </h3>
      <div className='horizontal-scrollbar flex items-center gap-2 overflow-y-hidden overflow-x-scroll md:gap-2 xl:gap-0'>
        {songs?.map((song, index) => (
          <Link
            className='group relative mx-auto w-full cursor-pointer text-white/80 shadow-md transition duration-200 ease-out hover:scale-[1.025] hover:text-gray-50 '
            key={index}
            href={song?.url}
          >
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
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RecentlyPlayed;
