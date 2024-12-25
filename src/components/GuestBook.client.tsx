'use client';

import LoginButtons from '@/components/LoginButtons';
import MessageForm from '@/components/MessageForm';
import Messages from '@/components/Messages';
import { SelectGuestBooks } from '@/db/schema';
import { User } from 'next-auth';
import React, { useOptimistic } from 'react';

interface GuestBookProps {
  user: User | undefined;
  messages: SelectGuestBooks[];
}

const GuestBook = ({ user, messages }: GuestBookProps) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (currentMessages, newMessage: string) => [
    {
      id: crypto.randomUUID(),
      email: user?.email!,
      image: user?.image!,
      content: newMessage,
      createdBy: user?.name!,
      createdAt: new Date(),
      isPending: true,
    },
    ...currentMessages,
  ]);

  return (
    <div className='space-y-6'>
      {user ? <MessageForm user={user} addOptimisticMessage={addOptimisticMessage} /> : <LoginButtons />}
      <Messages messages={optimisticMessages} />
    </div>
  );
};

export default GuestBook;
