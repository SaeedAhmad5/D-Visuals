/**
 * ! Please update theme type in /styled.d.ts when adding/removing anything from here
 */

const muiTheme = {
  palette: {},
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
  typography: {},
};

export const theme = {
  colors: {
    black: '#010101',
    goblin: '#1b4001',
    lightGreen: '#80cc28',
    oldLace: '#fcf2e3',
    orientalPink: '#c59ca0',
    darkPink: '#dd7596',
    borderColor: '#ececec',
    white: '#ffffff',
    error: '#f04438',
    errorLight: '#fda29b',
    warning: '#ffb800',
    darkGrey: '#969696',
    lightGoblin: '#1b4001d1',
  },
  ...muiTheme,
};
