
import { MdMenu, MdClose } from 'react-icons/md';

const HamBurger = ({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) => {
  return (
    <div className='sm:hidden' style={{ zIndex: 1000 }}>
      {!open ? (
        <MdMenu
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      ) : (
        <MdClose
          className='h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50'
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default HamBurger