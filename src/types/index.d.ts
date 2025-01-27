import type { ThreeElements } from '@react-three/fiber';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

export type IconProps = {
  color?: string;
  size?: string | number;
} & React.SVGAttributes<SVGElement>;
