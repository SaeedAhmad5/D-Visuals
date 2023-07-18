import React from 'react';
import { List, ListItemProps } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InventoryIcon from '@mui/icons-material/Inventory';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {
  LogoContainer,
  Logo,
  ListItemStyled,
  drawerWidth,
  SidebarDrawer,
  ListTextStyled,
  BottomLogoContainer,
  StyledListItemIcon,
  BottomTextPoweredBy,
  BottomTextNTDC,
} from './style';

interface ItemProp extends ListItemProps {
  label: string;
  to: string;
  ico?: any;
}

const Sidebar: React.FC = () => {
  const { t } = useTranslation('common');

  const { asPath } = useRouter();

  const sidebarWidth = drawerWidth;

  /*eslint-disable*/
  const SidebarItem: (props: ItemProp) => JSX.Element = ({ label, to, ico }: ItemProp) => {
    const listItemText = (
      <ListTextStyled
        primary={label}
        sx={{
          fontSize: '14px',
          fontWeight: '600',
        }}
      />
    );

    return (
      <ListItemStyled $active={asPath.includes(to)} href={to}>
        <StyledListItemIcon>{ico}</StyledListItemIcon>
        {listItemText}
      </ListItemStyled>
    );
  };

  return (
    <SidebarDrawer
      variant='permanent'
      sx={{
        width: { sidebarWidth },
        flexShrink: 0,
      }}
    >
      <LogoContainer>
        <Logo>
          <Image alt='organization_logo' src={'/Sidebar/NTDC.png'} layout='fill' objectFit='contain' />
        </Logo>
      </LogoContainer>
      <List>
        <SidebarItem ico={<DashboardIcon sx={{ color: '#fff' }} />} label={t('sidebar.dashboard')} to='/dashboard' />
        <SidebarItem ico={<AccountBalanceIcon sx={{ color: '#fff' }} />} label={t('sidebar.finance')} to='/finance' />
        <SidebarItem ico={<AssessmentIcon sx={{ color: '#fff' }} />} label={t('sidebar.HR')} to='/human_resource' />
        <SidebarItem ico={<InventoryIcon sx={{ color: '#fff' }} />} label={t('sidebar.inventory')} to='/inventory' />
        <SidebarItem
          ico={<WysiwygIcon sx={{ color: '#fff' }} />}
          label={t('sidebar.projectSystem')}
          to='/project_system'
        />
        <SidebarItem
          ico={<ManageAccountsIcon sx={{ color: '#fff' }} />}
          label={t('sidebar.assetMaintainence')}
          to='/asset_maintainance'
        />
      </List>
      
      <BottomLogoContainer>
      <BottomTextPoweredBy>
        Powered By
      </BottomTextPoweredBy>
        <Image src={'/Sidebar/NTDC.png'} alt='event_zero_logo' layout='fill' objectFit='contain'  />
      <div>
        <BottomTextNTDC>National Transmission Despatch Company</BottomTextNTDC>
        </div>
      </BottomLogoContainer>
    </SidebarDrawer>
  );
};

export default Sidebar;
