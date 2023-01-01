interface HeroProps {
  title: string;
  description: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <div>
      <h1 className='text-5xl underline'>{title}</h1>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default Hero;
