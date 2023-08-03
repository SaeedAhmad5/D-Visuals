import styled from 'styled-components';
import { styled as muiStyled, Container } from '@mui/material';

export const FullHeightContainer = muiStyled(Container)`
  height: 100%;
`;
export const FullWidth = styled.div`
  width: 100%;
`;

export const FlexRow = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  $margin?: string;
  $reverse?: string;
  alignSelf?: string;
}>`
  display: flex;

  ${({ justifyContent, alignItems, gap, $margin, $reverse, alignSelf }) => `
    justify-content: ${justifyContent ? justifyContent : 'center'};
    align-items: ${alignItems ? alignItems : 'center'};  
    align-self: ${alignSelf && alignSelf};  
    gap: ${gap ? gap : null};
    margin: ${$margin ? $margin : null};
    flex-direction: ${$reverse ? 'row-reverse' : 'row'};
  `}
`;

export const FlexColumn = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  $margin?: string;
  $marginTop?: string;
  $reverse?: string;
  alignSelf?: string;
}>`
  display: flex;
  flex-direction: column;

  ${({ justifyContent, alignItems, gap, $margin, $marginTop }) => `
    justify-content: ${justifyContent ? justifyContent : 'center'};
    align-items: ${alignItems ? alignItems : 'center'};
    gap: ${gap ? gap : null};
    margin: ${$margin ? $margin : null};
    margin-top: ${$marginTop ? $marginTop : null};
  `}
`;

export const ContentContainer = muiStyled('div')<{
  center?: string;
  $maxWidth: string;
}>(({ theme, center, $maxWidth }) => ({
  height: '100%',
  width: '100%',
  maxWidth: $maxWidth || '1200px',
  overflow: 'visible',
  margin: center && 'auto',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },
}));

export const FlexColContentContainer = styled(Container)<{ alignItems: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const FlexRowContentContainer = muiStyled(Container)<{ alignItems?: string }>`
  display: flex;
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const VerticalMargin1 = styled.div`
  margin: 1rem 0;
`;

export const VerticalMargin2 = styled.div`
  margin: 2rem 0;
`;

export const MarginTop = styled.div<{ rem: string }>`
  margin-top: ${({ rem }) => (rem ? rem : 1)}rem;
`;

export const HeaderOffset = styled.div`
  padding-top: 75px;
`;
