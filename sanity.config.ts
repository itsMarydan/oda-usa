import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { structure, isSingleton } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'oda-usa',
  title: 'ODA-USA Content',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Hide singletons from the global "Create new" menu
    templates: (templates) => templates.filter(({ schemaType }) => !isSingleton(schemaType)),
  },
  document: {
    // Disable create / delete / duplicate actions on singleton documents
    actions: (input, { schemaType }) =>
      isSingleton(schemaType)
        ? input.filter(({ action }) => action && !['delete', 'duplicate', 'unpublish'].includes(action))
        : input,
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter(({ templateId }) => !isSingleton(templateId))
        : prev,
  },
});
