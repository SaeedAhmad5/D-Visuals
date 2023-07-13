import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, ClickAwayListener, Grow, MenuItem, Paper, Popper } from '@mui/material';

import EZError from '../Error';

import { DropdownButton, StyledMenuList } from './style';

export type DropdownVariant = 'default' | 'goblin' | 'idle';

interface DropdownProps {
  options: string[];
  value: string;
  variant?: DropdownVariant;
  error?: boolean;
  feedback?: string;
  /*eslint-disable*/
  onChange: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, variant = 'default', error, feedback }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleMenuItemClick = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        flexDirection: 'column',
        gap: '5px',
      }}
    >
      <DropdownButton $variant={variant} ref={anchorRef} endIcon={<KeyboardArrowDownIcon />} onClick={handleToggle}>
        {value || 'Select'}
      </DropdownButton>
      {error && <EZError>{feedback}</EZError>}
      <Popper
        sx={{ width: '100%', zIndex: 1000000 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <StyledMenuList autoFocusItem={open} id='menu-list-grow'>
                  {options.map(option => (
                    <MenuItem key={option} onClick={() => handleMenuItemClick(option)}>
                      {option}
                    </MenuItem>
                  ))}
                </StyledMenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default Dropdown;
