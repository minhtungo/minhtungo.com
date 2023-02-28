import { Text } from '@/components/FramerMotion';
import { Actions } from '@/components/Guestbook';
import { PopUpFromBottom } from '@/lib/framerVariants';
import { useSession } from 'next-auth/react';

import Form from './Form';

const Guestbook = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Text
        variants={PopUpFromBottom}
        className='text-sm text-gray-900 dark:text-gray-200 sm:text-base'
      >
        {session
          ? `Hi ${session.user?.name}! I am glad you're here. Please leave a message below.`
          : "I'd love to hear from you! To leave a message, simply sign in with your preferred account below. "}
      </Text>
      {session ? <Form /> : <Actions />}
    </div>
  );
};
export default Guestbook;
