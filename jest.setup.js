import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('next/dist/shared/lib/router-context', () => {
  const { createContext } = require('react');
  const router = require('next-router-mock').default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

window.matchMedia = query => ({
  matches: query === '(pointer: fine)',
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

global.scrollTo = jest.fn();

window.HTMLMediaElement.prototype.load = () => jest.fn();
window.HTMLMediaElement.prototype.play = () => jest.fn();
window.HTMLMediaElement.prototype.pause = () => jest.fn();
