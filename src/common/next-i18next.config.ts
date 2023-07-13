import HttpBackend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';

const isBrowser = typeof window !== 'undefined';

const config = {
  // debug: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'it'],
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
};

export default config;
