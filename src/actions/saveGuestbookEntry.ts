'use server';

import { insertGuestbookEntry } from '@/db/mutations';
import { getCurrentUser } from '@/lib/auth';
import DOMPurify from 'isomorphic-dompurify';
import { revalidatePath } from 'next/cache';

export async function saveGuestbookEntry(
  previousData: {
    error: string;
  },
  formData: FormData
) {
  const user = await getCurrentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { email, image, name } = user;

  if (!email || !image || !name) {
    return { error: 'Unauthorized' };
  }

  const content = formData.get('content')?.toString();

  if (!content) {
    return { error: "The comment can't be empty." };
  }

  try {
    await insertGuestbookEntry({
      image,
      content: DOMPurify.sanitize(content),
      email,
      createdBy: name,
    });
    revalidatePath('/guestbook');
    return { error: '' };
  } catch (error) {
    let message = 'Unexpected error';
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
