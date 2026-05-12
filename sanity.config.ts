import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { structure, isSingleton, isSubmission } from './src/sanity/structure';

const hideFromCreate = (type: string) => isSingleton(type) || isSubmission(type);

export default defineConfig({
  basePath: '/studio',
  name: 'oda-usa',
  title: 'ODA-USA Content',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons + submissions can't be created from the Studio's "Create new" menu
    templates: (templates) => templates.filter(({ schemaType }) => !hideFromCreate(schemaType)),
  },
  document: {
    actions: (input, { schemaType }) => {
      if (isSingleton(schemaType)) {
        return input.filter(({ action }) => action && !['delete', 'duplicate', 'unpublish'].includes(action));
      }
      if (isSubmission(schemaType)) {
        // Submissions arrive via the website — Studio editors review them, don't create new ones
        return input.filter(({ action }) => action && !['duplicate'].includes(action));
      }
      return input;
    },
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter(({ templateId }) => !hideFromCreate(templateId))
        : prev,
  },
});
