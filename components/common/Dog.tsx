

import * as THREE from 'three';
import React, { useRef, Suspense } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Canvas } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    main: THREE.Mesh;
    Plane: THREE.Mesh;
  };
  materials: {
    palette: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

export function Dog(props: JSX.IntrinsicElements['group']) {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/dog-baked.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.69, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-3.4, 0, -2.95]}
        scale={[7.05, 1, 7.05]}
      />
    </group>
  );
}

useGLTF.preload('/dog-baked.glb');
