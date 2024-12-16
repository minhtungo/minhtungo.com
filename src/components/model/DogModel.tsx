'use client';

import { OrbitControls } from '@react-three/drei';
import { Suspense, lazy } from 'react';
import { Dog } from './Dog';
import { useInView } from 'react-intersection-observer';
import Spinner from '@/components/Spinner';

const Canvas = lazy(() => import('@react-three/fiber').then((mod) => ({ default: mod.Canvas })));

const DogModel = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className='canvasContainer'>
      <Suspense fallback={<Spinner />}>
        {inView && (
          <Canvas
            camera={{ position: [15, 8, 28], fov: 22 }}
            style={{ width: '100%', height: '100%' }}
            className='!absolute left-0 md:left-[10px] lg:left-[70px] xl:left-[95px]'
          >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, 10]} intensity={1} />
            <directionalLight position={[0, 5, 5]} intensity={0.8} />
            <Dog />
            <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} />
          </Canvas>
        )}
      </Suspense>
    </div>
  );
};
export default DogModel;
