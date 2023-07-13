import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';

import { theme } from '@/styles/theme';

import enTranslations from '../../public/locales/en/common.json';

// * The test running in jest are not in browser but in a completely separate test environment.
// * This file contains a wrapper for jest test environment with translations, themes, redux store etc.

const createProps = (locale = 'en', router = {}) => ({
  pageProps: {
    _nextI18Next: {
      initialLocale: locale,
      initialI18nStore: { en: { common: { ...enTranslations } } },
      userConfig: {
        i18n: {
          defaultLocale: 'en',
          locales: ['en', 'es'],
        },
      },
    },
  },
  router: {
    locale: locale,
    route: '/',
    ...router,
  },
});

function reduxRender(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  const WrapperWithTranslations = appWithTranslation(Wrapper);

  const defaultRenderProps = createProps();

  const renderWrapper = props => {
    return <WrapperWithTranslations {...defaultRenderProps}>{props.children}</WrapperWithTranslations>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    ...rtlRender(ui, { wrapper: renderWrapper, ...renderOptions }),
  };
}

export * from '@testing-library/react';
// override render method
export { reduxRender };
