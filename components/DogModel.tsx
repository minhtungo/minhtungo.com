'use client';

import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Dog } from './Dog';

const DogModel = () => {
  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 15 }} className='h-40 w-40'>
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />

      <ambientLight />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
export default DogModel;
