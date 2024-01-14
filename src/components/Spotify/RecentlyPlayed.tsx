import { Heading, Image, Link } from '@/components/ui';
import { getRecentlyPlayed, normalizeRecentlyPlayed } from '@/lib/spotify';

const fetchRecentlyPlayedSongs = async () => {
  const res = await getRecentlyPlayed();

  if (!res?.ok) {
    return [];
  }

  const { items = [] } = await res?.json();

  return items.map(normalizeRecentlyPlayed).sort((a, b) => b.played_at - a.played_at);
};

const RecentlyPlayed = async () => {
  const songs = await fetchRecentlyPlayedSongs();

  return (
    songs && (
      <div className='mx-auto pt-8'>
        <Heading className='mb-2 md:mb-6' as='h3'>
          Recently Played Songs
        </Heading>
        <div className='horizontal-scrollbar flex items-center gap-2 overflow-x-scroll xl:gap-3 lg:overflow-x-visible pb-[2px]'>
          {songs?.map((song, index) => (
            <Link className='group relative mx-auto w-full cursor-pointer text-white/80 shadow-md hover:text-gray-50 rounded-md' href={song?.url} key={index}>
              <div className='relative h-[360px] min-w-[240px] w-full'>
                <Image src={song?.thumbnail} alt={song?.title} width={400} height={400} className='absolute inset-0 h-full w-full object-cover min-w-[240px] brightness-[.45] group-hover:brightness-[.75] transition duration-300 ease-in-out rounded-md' />
              </div>

              <div className='absolute inset-x-0 bottom-5 ml-3 flex items-center space-x-3'>
                <div className='w-[236px] break-words text-[15px]'>
                  <h4 className='font-bold'>{song?.title}</h4>
                  <h6>{song?.artist}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
};
export default RecentlyPlayed;
