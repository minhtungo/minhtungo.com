import { useGLTF } from '@react-three/drei';
import { type GLTF } from 'three-stdlib';

export function Dog(props: JSX.IntrinsicElements['group']) {
  //@ts-ignore
  const { nodes, materials } = useGLTF('/model/dog-baked.glb') as GLTF;

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

useGLTF.preload('/model/dog-baked.glb');
