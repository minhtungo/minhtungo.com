import Snowfall from 'react-snowfall';

const SnowFall = () => {
  return (
          <Snowfall
        snowflakeCount={50}
        radius={[0, 2.5]}
        speed={[0, 1.5]}
        wind={[-0.5, 2]}
      />
  )
}
export default SnowFall