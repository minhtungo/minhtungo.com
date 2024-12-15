import db from '@/db';
import { guestbooks } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const getMessages = async () => {
  return await db.select().from(guestbooks).orderBy(desc(guestbooks.createdAt)).execute();
};
