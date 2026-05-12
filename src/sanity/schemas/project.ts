import { defineField, defineType } from 'sanity';
import { RocketIcon } from '@sanity/icons';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'text', rows: 6 }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['In Progress', 'Operational - Needs Support', 'Ongoing', 'Planned', 'Completed'],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Healthcare', 'Education', 'Social Welfare', 'Culture & Heritage', 'Infrastructure'],
      },
    }),
    defineField({ name: 'impact', title: 'Impact Statement', type: 'text', rows: 2 }),
    defineField({
      name: 'partnerships',
      title: 'Partnerships',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'needs',
      title: 'Project Needs',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'needsSupport', title: 'Needs Support', type: 'boolean', initialValue: true }),
    defineField({
      name: 'donationAllocation',
      title: 'Donation Allocation Key',
      type: 'string',
      description: 'Internal ID used by donation form (e.g. dialysis-center, library, welfare)',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'updates',
      title: 'Project Updates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', type: 'string', title: 'Date' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'date' } },
        },
      ],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'status', media: 'images.0' } },
});
