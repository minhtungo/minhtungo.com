import db from '@/db';
import { guestbooks } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const getMessages = async () => {
  return await db.query.guestbooks.findMany({
    orderBy: [desc(guestbooks.createdAt)],
  });
};
