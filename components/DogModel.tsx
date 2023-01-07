
import { useRef } from 'react';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Dog } from './common/Dog';

interface DogModelTypes {
  className?: string;
}

const DogModel = ({ className }: DogModelTypes) => {
  const orbitControlsRef = useRef();
  return (
    <Canvas
      camera={{ position: [15, 5, 18], fov: 30 }}
      style={{ width: '100%', height: '100%' }}
    >
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, -3, 2]} intensity={0.5} />
      <ambientLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight intensity={0.2} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <OrbitControls ref={orbitControlsRef} autoRotate />
    </Canvas>
  );
};
export default DogModel;
