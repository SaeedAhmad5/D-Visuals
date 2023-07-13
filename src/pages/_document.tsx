import React, { ReactNode } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import createEmotionServer from '@emotion/server/create-instance';
import { AppPropsType, DocumentInitialProps } from 'next/dist/shared/lib/utils';

import createEmotionCache from '@/common/emotionCache';

export default function MyDocument({ emotionStyleTags }: { emotionStyleTags: ReactNode[] }) {
  return (
    <Html lang='en'>
      <Head>
        <meta name='emotion-insertion-point' content='' />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const sheet = new ServerStyleSheet();

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  interface AppProps extends AppPropsType {
    emotionCache?: Cache;
  }

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App =>
        function EnhanceApp(props: AppProps) {
          return sheet.collectStyles(<App emotionCache={cache} {...props} />);
        },
    });

  const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
  // * This is important. It prevents Emotion to render invalid HTML.
  // * See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags: ReactNode[] = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    styles: [initialProps.styles, sheet.getStyleElement()],
  };
};
