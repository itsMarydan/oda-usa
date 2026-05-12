import type { StructureResolver } from 'sanity/structure';

const SINGLETON_TYPES = new Set([
  'siteSettings',
  'libraryPage',
  'culturePage',
  'membershipPage',
]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ODA-USA Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Library Page')
                .child(
                  S.editor()
                    .id('libraryPage')
                    .schemaType('libraryPage')
                    .documentId('libraryPage')
                ),
              S.listItem()
                .title('Culture Page')
                .child(
                  S.editor()
                    .id('culturePage')
                    .schemaType('culturePage')
                    .documentId('culturePage')
                ),
              S.listItem()
                .title('Membership Page')
                .child(
                  S.editor()
                    .id('membershipPage')
                    .schemaType('membershipPage')
                    .documentId('membershipPage')
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Announcements')
        .schemaType('announcement')
        .child(S.documentTypeList('announcement').title('Announcements')),

      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),

      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),

      S.divider(),

      S.listItem()
        .title('Leaders')
        .schemaType('leader')
        .child(S.documentTypeList('leader').title('Leaders')),

      S.listItem()
        .title('Past Presidents')
        .schemaType('pastPresident')
        .child(S.documentTypeList('pastPresident').title('Past Presidents')),
    ]);

export const isSingleton = (type: string) => SINGLETON_TYPES.has(type);
