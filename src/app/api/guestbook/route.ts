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
    const commentsWithDateString = comments.map((comment) => {
      const { updatedAt, ...rest } = comment;
      return {
        ...rest,
        updatedAt: updatedAt.toISOString(), // convert the date object to an ISO string
      };
    });

    return Response.json({
      comments: [...commentsWithDateString],
    });
  } catch (error) {
    return Response.json({
      error,
    });
  }
}

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    Response.json({ message: 'You must be logged in.' });
    return;
  }

  const { email, image, name } = session?.user as any;

  const { content } = await req.json();

  if (!content) {
    return Response.json({ message: "The comment can't be empty." });
  }

  const newComment = await prisma.guestBook.create({
    data: {
      email,
      image,
      content,
      createdBy: name,
    },
  });

  return Response.json({
    id: newComment.id,
    content: newComment.content,
    createdBy: JSON.stringify(newComment.createdBy),
    updatedAt: JSON.stringify(newComment.updatedAt),
  });
}
