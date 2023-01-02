interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <>
      <h1 className='text-3xl my-3'>{title}</h1>
      {subtitle && <h2 className='text-lg my-3'>{subtitle}</h2>}
    </>
  );
};
export default Title;
