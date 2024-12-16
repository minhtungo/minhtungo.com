import TechItems from '@/components/TechItems';
import Typography from '@/components/ui/typography';
import { TECH_ITEM_LIST } from '@/lib/constants';

const TechList = () => {
  return (
    <div className='space-y-6'>
      {TECH_ITEM_LIST.map((list) => (
        <>
          <Typography variant='h3' className='mb-4'>
            {list.title}
          </Typography>
          <TechItems items={list.items} />
        </>
      ))}
    </div>
  );
};

export default TechList;
