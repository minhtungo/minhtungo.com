import Link from 'next/link';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const RepoCard = () => {
  return (
    <div className='p-5 bg-transparent-black hover:text-shadow hover:shadow-primary'>
      <Link href='/'>
        <div className='flex items-center text-3xl mb-7'>
          <AiOutlineFolder />
          <div className='flex ml-auto text-[22px] gap-3 items-center'>
            <Link href='/' className='hover:text-blue-400'>
              <FiGithub className='hover:text-primary-gradient' />
            </Link>
            <Link href='/' className='hover:text-blue-400'>
              <FiExternalLink />
            </Link>
          </div>
        </div>
        <h1 className='text-xl font-semibold text-gray-200'>CineCity</h1>
        <p className='my-4 text-base font-normal text-gray-400'>
          Decentralized movie streaming platform
        </p>
        {/* Tech Stack */}
        <div className='flex gap-4 text-gray-500'>
          <span>React</span>
          <span>React</span>
          <span>React</span>
        </div>
      </Link>
    </div>
  );
};

const Repo = () => {
  return (
    <section className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:mt-6'>
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </section>
  );
};

export default Repo;
