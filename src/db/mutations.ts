import db from '@/db';
import { guestbooks, InsertGuestBooks } from '@/db/schema';

export const insertGuestbookEntry = async (data: InsertGuestBooks) => {
  await db.insert(guestbooks).values(data);
};
