import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',

  fields: [
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
    }),
  ],
});
