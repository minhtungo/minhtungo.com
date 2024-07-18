import type { CollectionConfig } from 'payload';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
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
      name: 'company',
      label: 'Company',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
    },
    {
      name: 'time',
      label: 'Time',
      type: 'text',
      required: true,
    },
    {
      name: 'isPresent',
      label: 'Is Present',
      type: 'checkbox',
    },
  ],
};
