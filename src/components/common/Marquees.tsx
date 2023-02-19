import { CSSProperties, FC } from 'react';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';

interface MarqueesProps {
  className?: string;
  speed?: number;
  style?: CSSProperties;
  pauseOnHover?: boolean;
  gradient?: boolean;
  children: React.ReactNode;
}

const Marquees: FC<MarqueesProps> = ({
  className = '',
  speed = 48,
  style = {},
  pauseOnHover = false,
  gradient = false,
  children,
  ...props
}) => {
  return (
    <Marquee
      gradient={gradient}
      pauseOnHover={pauseOnHover}
      speed={speed}
      className={classNames('', className)}
      style={style}
      {...props}
    >
      {children}
    </Marquee>
  );
};
export default Marquees;
