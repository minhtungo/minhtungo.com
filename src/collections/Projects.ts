import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
      required: true,
    },
    {
      name: 'tools',
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
