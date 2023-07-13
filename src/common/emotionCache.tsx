import createCache from '@emotion/cache';

const isBrowser = typeof window !== 'undefined';
// * On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// * This assures that MUI styles are loaded first.
// * It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
const createEmotionCache = () => {
  const emotionInsertionPoint: HTMLElement | null = isBrowser
    ? document.querySelector('meta[name="emotion-insertion-point"]')
    : null;

  return createCache({ key: 'mui-style', insertionPoint: emotionInsertionPoint || undefined });
};

export default createEmotionCache;
