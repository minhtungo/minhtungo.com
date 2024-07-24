import type { CollectionConfig } from 'payload';

export const Repos: CollectionConfig = {
  slug: 'repos',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      label: 'Href',
      type: 'text',
      required: true,
    },
    {
      name: 'techs',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
      required: true,
    },
  ],
};
