import { MdMenu, MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { PopUp } from '@/lib/FramerMotionVariants';

const HamBurger = ({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) => {
  return (
    <motion.div
      style={{ zIndex: 1000 }}
      initial='hidden'
      animate='visible'
      variants={PopUp}
      className='lg:hidden'
    >
      {!open ? (
        <MdMenu
          className='h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50'
          onClick={handleClick}
        />
      ) : (
        <MdClose
          className='h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50'
          onClick={handleClick}
        />
      )}
    </motion.div>
  );
};

export default HamBurger;
