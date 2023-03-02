import { Image, Link } from '@/components/common';
import { FromLeftChildren } from '@/lib/framerVariants';
import { motion } from 'framer-motion';

const SongCard = (song) => {
  return (
    <Link href={song?.url}>
      <motion.div
        variants={FromLeftChildren}
        className='group relative mx-auto w-full cursor-pointer text-white/80 shadow-md transition-[opacity,transform] duration-200 ease-out hover:scale-[1.025] hover:text-gray-50'
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
      </motion.div>
    </Link>
  );
};
export default SongCard;
