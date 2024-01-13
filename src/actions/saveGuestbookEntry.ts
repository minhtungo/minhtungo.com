'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth';

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { error: 'You must be logged in.' };
  }

  const { email, image, name } = session?.user as {
    name: string;
    email: string;
    image: string;
  };

  const content = formData.get('content') as string;

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

    return {
      message: 'Comment created successfully.',
    };
  } catch (error) {
    let message = 'Unexpected error';
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
