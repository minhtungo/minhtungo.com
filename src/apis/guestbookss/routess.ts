import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/asd/route';

export async function GET(request: Request) {
  try {
    const comments = await prisma.guestBook.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
    return Response.json([...comments]);
  } catch (error) {
    return Response.json({
      error,
    });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    Response.json({ message: 'You must be logged in.' });
    return;
  }

  const { email, image, name } = session?.user;

  const { content } = request.get('body');

  if (!content) {
    return res.status(400).send("The comment can't be empty.");
  }

  return Response.json(data);
}
