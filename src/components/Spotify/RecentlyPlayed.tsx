import Image from '@/components/common/Image';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const RecentlyPlayed = ({ songs }: { songs: any }) => {
  return (
    <section id='recently-played-songs' className=''>
      <h3 className='mb-1 bg-clip-text text-lg font-semibold text-gray-800 dark:text-gray-300 md:text-xl lg:text-2xl'>
        Recently Played Songs
      </h3>
      <div className='grid h-96 grid-cols-2 gap-x-4 gap-y-8 overflow-x-auto p-4 py-4 lg:grid-cols-3 xl:grid-cols-4'>
        {songs.map((song, index) => (
          <div
            className='group relative mx-auto h-[360px] w-[260px] cursor-pointer overflow-hidden rounded text-white/80 transition duration-200 ease-out hover:scale-105 hover:text-white/100'
            key={index}
          >
            <Image
              src={song.thumbnail}
              alt={song.title}
              width={400}
              height={400}
              className='absolute inset-0 h-full w-full rounded-[50px] object-cover opacity-80 group-hover:opacity-100'
            />
            <div className='absolute inset-x-0 bottom-10 ml-4 flex items-center space-x-3.5'>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#15883e] group-hover:bg-[#1db954]'>
                <BsFillPauseFill className='text-xl text-white' />
              </div>
              <div className='text-[15px]'>
                <h4 className='w-44 truncate font-extrabold'>{song.title}</h4>
                <h6>{song.artist}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default RecentlyPlayed;
