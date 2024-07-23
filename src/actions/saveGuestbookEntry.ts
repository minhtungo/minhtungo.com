'use server';

import { getCurrentUser } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { sanitize } from 'isomorphic-dompurify';
import db from '@/db';
import { guestbooks } from '@/db/schema';

export async function saveGuestbookEntry(formData: FormData) {
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
    await db.insert(guestbooks).values({
      image,
      content: sanitize(content),
      email,
      createdBy: name,
    });
    revalidatePath('/guestbook');
  } catch (error) {
    let message = 'Unexpected error';
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
