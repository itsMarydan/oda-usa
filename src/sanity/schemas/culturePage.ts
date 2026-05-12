import { defineField, defineType } from 'sanity';
import { EarthAmericasIcon } from '@sanity/icons';

export const culturePage = defineType({
  name: 'culturePage',
  title: 'Culture Page',
  type: 'document',
  icon: EarthAmericasIcon,
  fields: [
    defineField({
      name: 'heritage',
      title: 'Heritage Section',
      type: 'object',
      fields: [
        { name: 'overview', type: 'text', rows: 4, title: 'Overview' },
        {
          name: 'language',
          type: 'object',
          title: 'Language',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'status', type: 'string', title: 'Status' },
            { name: 'motto', type: 'string', title: 'Motto' },
          ],
        },
        {
          name: 'landmarks',
          type: 'array',
          title: 'Landmarks',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'description', type: 'text', rows: 3, title: 'Description' },
                { name: 'significance', type: 'text', rows: 3, title: 'Significance' },
                { name: 'image', type: 'image', options: { hotspot: true }, title: 'Image' },
              ],
              preview: { select: { title: 'name', media: 'image' } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'traditions',
      title: 'Traditions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', rows: 4, title: 'Description' },
            {
              name: 'occasions',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Occasions (when celebrated)',
            },
            {
              name: 'types',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Types (sub-categories)',
            },
            { name: 'image', type: 'image', options: { hotspot: true }, title: 'Image' },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heritageSpotlight',
      title: 'Heritage Spotlight',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'excerpt', type: 'text', rows: 2, title: 'Excerpt' },
            { name: 'content', type: 'text', rows: 5, title: 'Content' },
            { name: 'image', type: 'image', options: { hotspot: true }, title: 'Image' },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Culture Page' }) },
});
