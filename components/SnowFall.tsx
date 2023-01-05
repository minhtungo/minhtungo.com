'use client';

import Snowfall from 'react-snowfall';
import { useState, useEffect } from 'react';

const SnowFall = () => {
  const [showChild, setShowChild] = useState(false);
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

    if (!showChild) {
    return null;
  }

  return (
    <Snowfall
      snowflakeCount={50}
      radius={[0, 2.5]}
      speed={[0, 1.5]}
      wind={[-0.5, 2]}
    />
  );
};
export default SnowFall;
