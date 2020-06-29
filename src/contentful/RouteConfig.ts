import linkHandler from './handlers/LinkHandler';
import { RouteGeneratorConfig } from './RouteGenerator';

const config: RouteGeneratorConfig = {
  pages: [
    { contentType: 'page', parentField: 'parentPage' },
    { contentType: 'project', parentPath: 'project' }
  ],
  cleanupConfig: {
    handlers: {
      link: linkHandler
    },
    ignoreProps: ['sys'],
    ignoreTypes: []
  },
  defaultLocale: 'en-US'
};

export default config;
