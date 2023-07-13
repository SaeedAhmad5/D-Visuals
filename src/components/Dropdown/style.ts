import styled from 'styled-components';
import { Button, MenuItem, MenuList } from '@mui/material';

import { theme } from '@/styles/theme';

import { DropdownVariant } from '.';

const COLORS = {
  default: {
    color: theme.colors.black,
    bg: 'none',
  },
  goblin: {
    color: theme.colors.white,
    bg: theme.colors.goblin,
  },
  idle: {
    color: theme.colors.darkGrey,
    bg: 'none',
  },
};

export const DropdownButton = styled(Button)<{ $variant: DropdownVariant }>(({ $variant }) => ({
  textTransform: 'none',
  fontWeight: 'normal',
  fontSize: '16px',
  height: '40px',
  lineHeight: '24px',
  color: COLORS[$variant].color,
  paddingLeft: '16px',
  paddingRight: '16px',
  width: '100%',
  border: `1px solid ${COLORS[$variant].color}`,
  borderRadius: '50px',
  gap: '7px',
  backgroundColor: COLORS[$variant].bg,
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'none !important',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '0',
  },
}));

export const MenuItemStyled = styled(MenuItem)<{ $invert?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;

  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  /* Goblin */
  color: ${({ theme }) => theme.colors.goblin};

  ${({ $invert, theme }) =>
    $invert &&
    `
    color: ${theme.colors.white};
  `}
`;

export const StyledMenuList = styled(MenuList)`
  width: 100% !important;
  max-height: 250px;
  overflow-y: auto;
  transform: translateX(0) !important;
`;
