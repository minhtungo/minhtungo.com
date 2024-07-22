export type IconProps = {
  color?: string;
  size?: string | number;
} & React.SVGAttributes<SVGElement>;

export type Song = {
  title: string;
  artist: string;
  album: string;
  thumbnail: string;
  url: string;
  playedAt: string;
  duration: number;
};
