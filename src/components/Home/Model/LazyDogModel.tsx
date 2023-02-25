'use client';

import Loader from './Loader';
import dynamic from 'next/dynamic';

const DogModel = dynamic(() => import('./DogModel'), {
  ssr: false,
  loading: () => <Loader />,
});

const LazyDogModel = () => {
  return <DogModel />;
};

export default LazyDogModel;
