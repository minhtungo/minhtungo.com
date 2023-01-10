import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Dog } from './common/Dog';
import { useState, useEffect } from 'react';
interface DogModelTypes {
  className?: string;
}

const DogModel = ({ className }: DogModelTypes) => {
  const [autoRotate, setAutoRotate] = useState(false);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.01);

  useEffect(() => {
    setAutoRotateSpeed(800);

    setTimeout(() => {
      setAutoRotateSpeed(2);
    }, 800);
  }, []);
  return (
    <Canvas
      camera={{ position: [15, 9, 18], fov: 27 }}
      style={{ width: '100%', height: '100%' }}
    >
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, -3, 2]} intensity={0.5} />
      <ambientLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight intensity={0.2} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={autoRotateSpeed} />
    </Canvas>
  );
};
export default DogModel;
