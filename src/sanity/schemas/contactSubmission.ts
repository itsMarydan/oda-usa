import { defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons';

export const contactSubmission = defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Read', value: 'read' },
          { title: 'Replied', value: 'replied' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    }),
    defineField({ name: 'name', title: 'Name', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'Phone', type: 'string', readOnly: true }),
    defineField({ name: 'subject', title: 'Subject', type: 'string', readOnly: true }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 6, readOnly: true }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Private notes for the team. Not visible to the sender.',
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'newestFirst', by: [{ field: '_createdAt', direction: 'desc' }] },
    { title: 'Status', name: 'byStatus', by: [{ field: 'status', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'subject', status: 'status' },
    prepare: ({ title, subtitle, status }) => ({
      title: title || 'Unnamed',
      subtitle: `${status === 'new' ? '● ' : ''}${subtitle ?? 'No subject'}`,
    }),
  },
});
