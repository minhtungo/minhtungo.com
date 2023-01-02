import { DogModel } from './';

export const Hero = () => {
  return (
    <>
      <section id='home' className='flex md:flex-row flex-col'>
        <div
          className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 md:px-0 py-4`}
        >
          <h1 className='mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Minh Tu Ngo
          </h1>
          <p className='mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Front End Developer
          </p>
        </div>

        <div className={`flex-1 flex justify-center items-center relative`}>
          <DogModel />
        </div>
      </section>
    </>
  );
};
