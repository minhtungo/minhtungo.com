'use client';

import ScrollToTop from 'react-scroll-to-top';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  return <ScrollToTop smooth className='primary-gradient !rounded-full' component={<ArrowUp className='h-6 w-6 text-gray-50 dark:text-gray-900' />} />;
};

export default ScrollToTopButton;
