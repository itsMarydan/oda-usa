import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'date', title: 'Date', type: 'string', description: 'e.g. "March 2025" or "TBD 2025"' }),
    defineField({ name: 'time', title: 'Time', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: ['General Meeting', 'Cultural Event', 'Fundraiser', 'Anniversary', 'Other'],
      },
    }),
    defineField({ name: 'registrationRequired', title: 'Registration Required', type: 'boolean' }),
    defineField({ name: 'memberOnly', title: 'Members Only', type: 'boolean' }),
    defineField({ name: 'isPast', title: 'Past Event', type: 'boolean', initialValue: false }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'highlights',
      title: 'Highlights (past events)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', options: { hotspot: true }, title: 'Image' },
            { name: 'caption', type: 'string', title: 'Caption' },
            {
              name: 'category',
              type: 'string',
              options: { list: ['Cultural', 'Projects', 'Meetings', 'Community'] },
            },
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
});
