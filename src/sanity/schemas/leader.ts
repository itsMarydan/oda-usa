import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const leader = defineType({
  name: 'leader',
  title: 'Leader',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Committee', value: 'exec' },
          { title: 'Board of Trustees', value: 'trustee' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'e.g. President, Vice President, Trustee',
    }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Headshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'term', title: 'Term', type: 'string', description: 'e.g. "2024-2026"' }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'position', media: 'image' },
  },
});
