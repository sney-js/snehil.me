import * as path from 'path';
import { ContentfulApi } from './api';
import RouteGenerator from './RouteGenerator';
// import { ContentfulEntry } from './Resolver';

require('dotenv').config();

const client = new ContentfulApi({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENV
});

export default {
  entry: path.resolve('./src/ReactStatic/index.tsx'),
  // getSiteData: async () => {
  //     const routeGenerator = new RouteGenerator(client);
  //     return routeGenerator.getSiteData();
  // },
  getRoutes: async () => {
    const routeGenerator = new RouteGenerator(client);
    return [
      {
        page: { test },
        name: 'hi',
        path: 'index',
        locale: 'en'
      }
    ];
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/tests/pages')
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      // "react-static-plugin-sass",
      // {
      //     includePaths: ["src/app/", "src/app/scss"], // always includes `src/`
      //     // other options for the sass-loader
      // },
    ],
    // "react-static-plugin-scss-modules-rw",
    'react-static-plugin-file-replace'
  ]
};
