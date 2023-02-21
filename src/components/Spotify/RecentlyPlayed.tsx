import Image from '@/components/common/Image';
import { BsFillPlayFill } from 'react-icons/bs';
import Link from '@/components/common/Link';

const RecentlyPlayed = ({ songs }: { songs: any }) => {
  return (
    <section id='recently-played-songs' className='mx-auto pt-8'>
      <h3 className='mb-6 bg-clip-text text-lg font-semibold text-gray-800 dark:text-gray-300 md:text-xl lg:text-2xl'>
        Recently Played Songs
      </h3>
      <div className='horizontal-scrollbar flex items-center gap-2 overflow-y-hidden overflow-x-scroll xl:px-4 md:gap-2 xl:gap-0'>
        {songs.map((song, index) => (
          <Link
            className='group relative mx-auto w-full cursor-pointer rounded text-white/80 shadow-md transition duration-200 ease-out hover:scale-105 hover:text-white/100'
            key={index}
            href={song.url}
          >
            <div className='relative h-[360px] w-[260px] overflow-hidden shadow-lg'>
              <Image
                src={song.thumbnail}
                alt={song.title}
                width={400}
                height={400}
                className='absolute inset-0 h-full w-full rounded-lg object-cover opacity-50 group-hover:opacity-100'
              />
            </div>

            <div className='absolute inset-x-0 bottom-5 ml-4 flex items-center space-x-3.5'>
              <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-gradient opacity-80 group-hover:opacity-100'>
                <BsFillPlayFill className='text-xl text-white' />
              </div>
              <div className='text-[15px]'>
                <h4 className='w-44 truncate font-extrabold'>{song.title}</h4>
                <h6>{song.artist}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RecentlyPlayed;
