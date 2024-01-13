'use client';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

const ScrollToTopButton = () => {
  return <ScrollToTop smooth className='primary-gradient !rounded-full' component={<MdOutlineKeyboardArrowUp className='mx-auto h-6 w-6 text-gray-50 dark:text-gray-900' />} />;
};

export default ScrollToTopButton;
