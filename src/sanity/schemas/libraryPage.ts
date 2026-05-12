import { defineField, defineType } from 'sanity';
import { BookIcon } from '@sanity/icons';

export const libraryPage = defineType({
  name: 'libraryPage',
  title: 'Library Page',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'tagline', type: 'string', title: 'Tagline' },
        { name: 'description', type: 'text', rows: 3, title: 'Description' },
        {
          name: 'image',
          type: 'image',
          title: 'Featured Image',
          options: { hotspot: true },
          description: 'Shown on the homepage Library section and library page hero',
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Section Title' },
        { name: 'content', type: 'array', of: [{ type: 'text', rows: 4 }], title: 'Paragraphs' },
        { name: 'mission', type: 'text', rows: 3, title: 'Mission Statement' },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'address', type: 'string', title: 'Address' },
        { name: 'region', type: 'string', title: 'Region' },
        { name: 'managedBy', type: 'string', title: 'Managed By' },
        {
          name: 'hours',
          type: 'object',
          title: 'Hours',
          fields: [
            { name: 'weekdays', type: 'string', title: 'Weekdays' },
            { name: 'weekends', type: 'string', title: 'Weekends' },
            { name: 'note', type: 'string', title: 'Note' },
          ],
        },
      ],
    }),
    defineField({
      name: 'operations',
      title: 'Operations',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', rows: 3, title: 'Description' },
        {
          name: 'supportedAreas',
          type: 'array',
          title: 'Supported Areas',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'area', type: 'string', title: 'Area' },
                { name: 'description', type: 'text', rows: 2, title: 'Description' },
              ],
              preview: { select: { title: 'area' } },
            },
          ],
        },
        { name: 'fundingModel', type: 'text', rows: 2, title: 'Funding Model' },
      ],
    }),
    defineField({
      name: 'whoWeServe',
      title: 'Who We Serve',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
          name: 'audiences',
          type: 'array',
          title: 'Audiences',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'group', type: 'string', title: 'Group' },
                { name: 'description', type: 'text', rows: 2, title: 'Description' },
                { name: 'icon', type: 'string', title: 'Icon (Lucide name)' },
              ],
              preview: { select: { title: 'group' } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
          name: 'services',
          type: 'array',
          title: 'Services',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'description', type: 'text', rows: 2, title: 'Description' },
                { name: 'icon', type: 'string', title: 'Icon (Lucide name)' },
                { name: 'status', type: 'string', title: 'Status', options: { list: ['Active', 'Planned'] } },
              ],
              preview: { select: { title: 'name' } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'statement', type: 'text', rows: 3, title: 'Statement' },
        { name: 'points', type: 'array', of: [{ type: 'string' }], title: 'Impact Points' },
        {
          name: 'metrics',
          type: 'array',
          title: 'Metrics',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'value', type: 'string', title: 'Value' },
                { name: 'description', type: 'string', title: 'Description' },
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'needs',
      title: 'Current Needs',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'description', type: 'text', rows: 2, title: 'Description' },
        {
          name: 'categories',
          type: 'array',
          title: 'Categories',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'category', type: 'string', title: 'Category' },
                { name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Items' },
                {
                  name: 'priority',
                  type: 'string',
                  title: 'Priority',
                  options: { list: ['Critical', 'High', 'Medium', 'Low'] },
                },
              ],
              preview: { select: { title: 'category', subtitle: 'priority' } },
            },
          ],
        },
      ],
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
              options: { list: ['Building', 'Interior', 'Resources', 'Programs', 'Community'] },
            },
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        },
      ],
    }),
    defineField({
      name: 'support',
      title: 'Support Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'message', type: 'text', rows: 2, title: 'Message' },
        { name: 'callToAction', type: 'text', rows: 2, title: 'Call To Action' },
        { name: 'taxDeductible', type: 'boolean', title: 'Tax Deductible' },
        {
          name: 'ways',
          type: 'array',
          title: 'Ways to Support',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'method', type: 'string', title: 'Method' },
                { name: 'description', type: 'text', rows: 2, title: 'Description' },
                { name: 'link', type: 'string', title: 'Link' },
              ],
              preview: { select: { title: 'method' } },
            },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Library Page' }) },
});
