import styled from 'styled-components';
import { ListItemIcon, Drawer, SvgIconProps, ListItemText } from '@mui/material';
import Link from 'next/link';

export const drawerWidth = 325;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
`;
export const BottomLogoContainer = styled.div`
  position: absolute;
  bottom: 2.5%;
  width: 156px;
  height: 65px;
`;

export const Icons = styled.div`
  height: 25px;
  position: relative;
  width: 25px;
`;
export const Logo = styled.div`
  height: 50px;
  position: relative;
  width: 150px;
`;

export const ListItemStyled = styled(Link)<{ $active: boolean }>`
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.oldLace};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  line-height: 120%;
  &:hover {
    background-color: #80cc284d;
    border-radius: 8px;
  }

  ${({ $active }) =>
    $active &&
    `
    background-color: #80cc284d;
    border-radius: 8px;
  `}
`;

export const SidebarListItemIcon = styled(ListItemIcon)`
  && {
    color: ${({ theme }) => theme.colors.oldLace};
  }
`;

export type SidebarItemProps = {
  icon: React.ElementType<SvgIconProps> | string;
  label: string;
  to?: string;
};

export const SidebarDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background-color: ${({ theme }) => theme.colors.goblin};
    padding: 2rem;
  }
`;

export const ListTextStyled = styled(ListItemText)`
  font-family: Source Sans Pro;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 17px;
  letter-spacing: 0.25px;
  text-align: left;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 37px;
`;
