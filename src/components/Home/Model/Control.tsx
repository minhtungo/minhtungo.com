import { OrbitControls } from '@react-three/drei';

import { FC, useEffect, useState } from 'react';

interface ControlProps {}

const Control: FC<ControlProps> = ({}) => {
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.01);

  useEffect(() => {
    setAutoRotateSpeed(800);

    setTimeout(() => {
      setAutoRotateSpeed(2);
    }, 800);
  }, []);
  return (
    <OrbitControls
      autoRotate
      autoRotateSpeed={autoRotateSpeed}
      enablePan={false}
      enableZoom={false}
    />
  );
};

export default Control;
