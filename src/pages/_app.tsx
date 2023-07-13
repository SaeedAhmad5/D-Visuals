import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { CacheProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import i18nConfig from '@/common/next-i18next.config';
import '@/assets/fonts/fonts.css';
import GlobalStyles from '@/styles/global-styles';
import { theme } from '@/styles/theme';
import createEmotionCache from '@/common/emotionCache';
import Layout from '@/components/Layout';
import { wrapper } from '@/redux';
// import configureAxios from '@/common/axiosConfig';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);

  const persister = persistStore(store);

  return (
    clientSideEmotionCache && (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
              <GlobalStyles />
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    )
  );
}

export default appWithTranslation(App, i18nConfig);
