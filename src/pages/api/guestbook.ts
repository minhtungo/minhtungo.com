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
        updated_at: 'desc',
      },
    });

    return res.json([...comments]);
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const { email, image, name } = session?.user;
  const { body: content } = req.body;

  if (req.method === 'POST') {
    if (!content) {
      return res.status(400).send("The comment can't be empty.");
    }
    const newComment = await prisma.guestBook.create({
      data: {
        body: content,
        email,
        image,
        created_by: name,
      },
    });
    return res.status(201).json({
      id: newComment.id,
      body: newComment.body,
      created_by: newComment.created_by,
      updated_at: newComment.updated_at,
    });
  }

  return res.send('Method not allowed.');
}
