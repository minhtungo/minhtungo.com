'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { Dog } from './Dog';

const DogModel = () => {
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.01);

  useEffect(() => {
    setAutoRotateSpeed(800);

    setTimeout(() => {
      setAutoRotateSpeed(2);
    }, 800);
  }, []);

  return (
    <Canvas
      camera={{ position: [15, 8, 28], fov: 22 }}
      style={{ width: '100%', height: '100%' }}
      className='!absolute left-0 md:left-[10px] lg:left-[70px] xl:left-[95px]'
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />
      <Suspense>
        <Dog />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={autoRotateSpeed} enablePan={false} enableZoom={false} />
    </Canvas>
  );
};
export default DogModel;
