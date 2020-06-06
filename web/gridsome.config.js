// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteName: 'Injured Nurses',
  siteDescription:
    'Sharing and support for injured nurses',

  templates: {
    SanityPost: '/:slug__current'
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-164568522-1'
      }
    },
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: 'https://cfdd7cf5d41341f8bd6533bad9f4f0cc@o403890.ingest.sentry.io/5267023',
        attachProps: true, // defaults to true
        logErrors: process.env.NODE_ENV === 'development' // defaults to false, see below for further info
      }
    }
  ]
};
