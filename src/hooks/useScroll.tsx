import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = debounce(() => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolling };
};
