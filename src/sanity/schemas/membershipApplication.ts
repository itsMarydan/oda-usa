import { defineField, defineType } from 'sanity';
import { AddUserIcon } from '@sanity/icons';

export const membershipApplication = defineType({
  name: 'membershipApplication',
  title: 'Membership Application',
  type: 'document',
  icon: AddUserIcon,
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending review', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Needs more info', value: 'needs-info' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    }),
    defineField({ name: 'firstName', title: 'First Name', type: 'string', readOnly: true }),
    defineField({ name: 'lastName', title: 'Last Name', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'Phone', type: 'string', readOnly: true }),
    defineField({ name: 'state', title: 'State / Province', type: 'string', readOnly: true }),
    defineField({
      name: 'okpellaConnection',
      title: 'Okpella Connection',
      type: 'text',
      rows: 3,
      readOnly: true,
      description: 'How the applicant is connected to Okpella',
    }),
    defineField({
      name: 'membershipType',
      title: 'Membership Type',
      type: 'string',
      readOnly: true,
      options: { list: ['single', 'married'] },
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'text',
      rows: 4,
      readOnly: true,
    }),
    defineField({
      name: 'reviewNotes',
      title: 'Review Notes',
      type: 'text',
      rows: 3,
      description: 'Private notes for the review committee.',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'string',
      description: 'Name of the board member who reviewed this application.',
    }),
  ],
  orderings: [
    { title: 'Newest first', name: 'newestFirst', by: [{ field: '_createdAt', direction: 'desc' }] },
    { title: 'Status', name: 'byStatus', by: [{ field: 'status', direction: 'asc' }] },
  ],
  preview: {
    select: { first: 'firstName', last: 'lastName', status: 'status', type: 'membershipType' },
    prepare: ({ first, last, status, type }) => ({
      title: `${first ?? ''} ${last ?? ''}`.trim() || 'Unnamed',
      subtitle: `${status === 'pending' ? '● ' : ''}${status ?? 'pending'} · ${type ?? ''}`,
    }),
  },
});
