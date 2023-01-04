'use client';

import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Dog } from './common/Dog';

interface DogModelTypes {
  className?: string;
}

const DogModel = ({ className }: DogModelTypes) => {
  return (
    <Canvas
      camera={{ position: [15, 5, 18], fov: 30 }}
      style={{ width: '100%', height: '100%' }}
    >
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <ambientLight position={[5, 5, 5]} intensity={1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
export default DogModel;
