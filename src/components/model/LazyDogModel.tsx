'use client';

import Spinner from '@/components/common/Spinner';
import dynamic from 'next/dynamic';

const DogModel = dynamic(() => import('./DogModel'), {
  ssr: false,
  loading: () => (
    <div role='status' className='mt-[98px] lg:ml-[90px] lg:mt-[140px]'>
      <Spinner />
    </div>
  ),
});

const LazyDogModel = () => {
  return <DogModel />;
};

export default LazyDogModel;
