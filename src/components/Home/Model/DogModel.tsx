'use client';

import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Dog } from './Dog';
import Control from './Control';
interface DogModelTypes {
  className?: string;
}

const DogModel = memo(({ className }: DogModelTypes) => {
  return (
    <Canvas
      camera={{ position: [15, 8, 28], fov: 22 }}
      style={{ width: '100%', height: '100%' }}
      className='!absolute left-0 md:left-[10px] lg:left-[70px] xl:left-[95px]'
    >
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, -3, 2]} intensity={0.5} />
      <ambientLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight intensity={0.2} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <Control />
    </Canvas>
  );
});

DogModel.displayName = 'DogModel';

export default DogModel;
