import { Heading } from '@/components/ui';
import { getPayload } from '@/lib/payload';

const Experiences = async () => {
  const payload = await getPayload();

  const experiences = await payload.find({
    collection: 'experiences',
  });

  return (
    <div className='mx-auto pt-1 lg:pt-3'>
      <Heading className='mb-2 md:mb-6' as='h3'>
        My Journey
      </Heading>
      <div className='flex flex-col gap-8 lg:flex-row'></div>
    </div>
  );
};
export default Experiences;
