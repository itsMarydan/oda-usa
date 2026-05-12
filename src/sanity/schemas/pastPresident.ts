import { defineField, defineType } from 'sanity';
import { StarIcon } from '@sanity/icons';

export const pastPresident = defineType({
  name: 'pastPresident',
  title: 'Past President',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'term', title: 'Term', type: 'string', description: 'e.g. "2018 - 2020"' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Term', name: 'termAsc', by: [{ field: 'term', direction: 'asc' }] },
  ],
  preview: { select: { title: 'name', subtitle: 'term' } },
});
