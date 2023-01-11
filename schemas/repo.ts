import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'repo',
  title: 'Repo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'githubURL',
      title: 'Github URL',
      type: 'url',
    }),
    defineField({
      name: 'liveURL',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
});
