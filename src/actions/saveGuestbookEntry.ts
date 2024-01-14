'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('Unauthorized');
  }

  const { email, image, name } = session?.user as {
    name: string;
    email: string;
    image: string;
  };

  const content = formData.get('content')?.toString();

  if (!content) {
    return { error: "The comment can't be empty." };
  }

  try {
    await prisma.guestBook.create({
      data: {
        email,
        image,
        content,
        createdBy: name,
      },
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
