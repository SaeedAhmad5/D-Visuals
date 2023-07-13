// ! This must stay in sync with common/next-i18next.config.ts

/* eslint-disable */
const HttpBackend = require('i18next-http-backend/cjs');
const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

const isBrowser = typeof window !== 'undefined';

module.exports = {
  // debug: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  backend: {
    backendOptions: [
      {
        expirationTime: 60 * 60 * 1000, // 1 hour
      },
      {
        projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
        version: 'latest',
      },
    ],
    backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
  },
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
  eslint: {
    dirs: ['.'],
  },
};
