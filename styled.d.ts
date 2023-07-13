import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      goblin: string;
      lightGreen: string;
      oldLace: string;
      orientalPink: string;
      darkPink: string;
      borderColor: string;
      white: string;
      error: string;
      errorLight: string;
      warning: string;
      darkGrey: string;
    };
  }
}
