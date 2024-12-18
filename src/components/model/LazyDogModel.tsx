'use client';

import Spinner from '@/components/Spinner';
import { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

const DogModel = lazy(() => import('./DogModel'));

const LazyDogModel = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className='canvasContainer'>
      {inView && (
        <Suspense fallback={<Spinner className='mb-24 xl:mb-20' />}>
          <DogModel />
        </Suspense>
      )}
    </div>
  );
};
export default LazyDogModel;
