import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/legacy/image';

import { ActionImage } from '@/views/Events/style';

const ITEM_HEIGHT = 48;

export interface MenuItemType {
  text: string;
  icon: string;
  color: string;
}
interface PropTypes {
  menuItems: MenuItemType[];
}
export default function ActionPopup({ menuItems }: PropTypes) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 'auto',
            marginLeft: '-2rem',
          },
        }}
      >
        {menuItems.map((item: MenuItemType) => (
          <MenuItem key={item.text} onClick={handleClose} color={item.color}>
            <ActionImage>
              <Image src={item.icon} alt='All_tab_img' layout='fill' objectFit='contain' />
            </ActionImage>
            <span style={{ marginLeft: 10, color: item.color }}>{item.text}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
