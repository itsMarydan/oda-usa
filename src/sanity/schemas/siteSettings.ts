import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({ name: 'name', title: 'Organization Name', type: 'string' }),
    defineField({ name: 'shortName', title: 'Short Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'okpellaMotto', title: 'Okpella Motto', type: 'string' }),
    defineField({ name: 'founded', title: 'Year Founded', type: 'number' }),
    defineField({ name: 'taxStatus', title: 'Tax Status', type: 'string' }),
    defineField({ name: 'mission', title: 'Mission Statement', type: 'text', rows: 4 }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters',
      type: 'object',
      fields: [
        { name: 'city', type: 'string', title: 'City' },
        { name: 'county', type: 'string', title: 'County' },
        { name: 'state', type: 'string', title: 'State' },
        { name: 'note', type: 'string', title: 'Note' },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'address', type: 'string', title: 'Mailing Address' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
      ],
    }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Large image shown at the top of the homepage. Optional — leave empty for text-only hero.',
    }),
  ],
  preview: { select: { title: 'name' } },
});
