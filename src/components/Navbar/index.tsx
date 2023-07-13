import React, { useRef, useState } from 'react';
import { Badge, IconButton, Avatar, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useRouter } from 'next/router';

import { NavWrapper, FlexWrapper } from './style';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  const anchorEl = useRef(null);
  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <NavWrapper>
      {/* <Searchbar placeholder='Enter your Search Keyword' /> */}
      <p style={{ width: '100%' }}>NTDC Dashboard for Data Analysis</p>
      <IconButton aria-label='cart'>
        <StyledBadge badgeContent={1} color='error'>
          <NotificationsOutlinedIcon sx={{ color: '#161616' }} />
        </StyledBadge>
      </IconButton>
      <FlexWrapper ref={anchorEl} onClick={() => setOpen(true)}>
        <Avatar src={''} alt='login Img' />
        <p>Admin</p>
      </FlexWrapper>
      <Popper open={open} anchorEl={anchorEl.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList autoFocusItem={open} id='menu-list-grow'>
                  <MenuItem onClick={() => push('/logout')}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </NavWrapper>
  );
};

export default Navbar;
