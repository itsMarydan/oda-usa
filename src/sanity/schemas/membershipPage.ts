import { defineField, defineType } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export const membershipPage = defineType({
  name: 'membershipPage',
  title: 'Membership Page',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'fees',
      title: 'Fees',
      type: 'object',
      fields: [
        {
          name: 'application',
          type: 'object',
          title: 'Application Fee',
          fields: [
            { name: 'amount', type: 'number', title: 'Amount' },
            { name: 'currency', type: 'string', title: 'Currency', initialValue: 'USD' },
            {
              name: 'type',
              type: 'string',
              title: 'Fee Type',
              options: { list: ['one-time', 'annual'] },
              initialValue: 'one-time',
            },
            { name: 'refundable', type: 'boolean', title: 'Refundable' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
        {
          name: 'annualDues',
          type: 'object',
          title: 'Annual Dues',
          fields: [
            {
              name: 'single',
              type: 'object',
              title: 'Single',
              fields: [
                { name: 'amount', type: 'number', title: 'Amount' },
                { name: 'currency', type: 'string', title: 'Currency', initialValue: 'USD' },
                { name: 'description', type: 'string', title: 'Description' },
              ],
            },
            {
              name: 'married',
              type: 'object',
              title: 'Married',
              fields: [
                { name: 'amount', type: 'number', title: 'Amount' },
                { name: 'currency', type: 'string', title: 'Currency', initialValue: 'USD' },
                { name: 'description', type: 'string', title: 'Description' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'goodStanding',
      title: 'Good Standing',
      type: 'object',
      fields: [
        { name: 'requirements', type: 'array', of: [{ type: 'string' }], title: 'Requirements' },
        { name: 'privileges', type: 'array', of: [{ type: 'string' }], title: 'Privileges' },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Member Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', type: 'string', title: 'Type' },
            { name: 'description', type: 'text', rows: 2, title: 'Description' },
            { name: 'votingRights', type: 'boolean', title: 'Voting Rights' },
          ],
          preview: { select: { title: 'type' } },
        },
      ],
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment Methods',
      type: 'object',
      fields: [
        { name: 'zelle', type: 'string', title: 'Zelle (email or phone)' },
        {
          name: 'bankTransfer',
          type: 'object',
          title: 'Bank Transfer',
          fields: [
            { name: 'bankName', type: 'string', title: 'Bank Name' },
            { name: 'accountName', type: 'string', title: 'Account Name' },
            { name: 'accountNumber', type: 'string', title: 'Account Number' },
            { name: 'routingNumber', type: 'string', title: 'Routing Number' },
          ],
        },
        {
          name: 'check',
          type: 'object',
          title: 'Check',
          fields: [
            { name: 'payableTo', type: 'string', title: 'Payable To' },
            { name: 'mailTo', type: 'string', title: 'Mailing Address' },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Membership Page' }) },
});
