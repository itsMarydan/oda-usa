import { defineField, defineType } from 'sanity';
import { BellIcon } from '@sanity/icons';

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'placement',
      title: 'Where it appears',
      type: 'string',
      options: {
        list: [
          { title: 'Active banner (top of site)', value: 'active' },
          { title: 'Homepage card', value: 'homepage' },
        ],
        layout: 'radio',
      },
      initialValue: 'homepage',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Banner Text', type: 'string', description: 'Used for active banners' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'content', title: 'Full Content', type: 'text', rows: 5 }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['announcement', 'project-update', 'call-to-action', 'meeting'],
      },
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: { list: ['low', 'medium', 'high'] },
    }),
    defineField({ name: 'link', title: 'Link URL', type: 'string' }),
    defineField({ name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'placement', text: 'text' },
    prepare: ({ title, subtitle, text }) => ({
      title: title || text || 'Untitled',
      subtitle,
    }),
  },
});
