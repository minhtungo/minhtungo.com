import prisma from '@/lib/prismadb';
import { getServerSession } from 'next-auth/next';

import { authOptions } from './auth/[...nextauth]';

import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const comments = await prisma.guestBook.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
    console.log(comments);
    return res.json([...comments]);
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const { email, image, name } = session?.user;

  const { content } = req.body;

  if (req.method === 'POST') {
    if (!content) {
      return res.status(400).send("The comment can't be empty.");
    }
    const newComment = await prisma.guestBook.create({
      data: {
        email,
        image,
        content,
        createdBy: name,
      },
    });
    return res.status(201).json({
      id: newComment.id,
      content: newComment.content,
      createdBy: newComment.createdBy,
      updatedAt: newComment.updatedAt,
    });
  }

  return res.send('Method not allowed.');
}
