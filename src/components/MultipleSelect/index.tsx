import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import { theme } from '@/styles/theme';

import { SearchBoxSelect, ListItemTextStyled } from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps: any = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
      maxWidth: 200,
      marginTop: 0,
      padding: 0,
      overflowY: 'auto',
      scrollbarWidth: 'thin',
      '&::webkit-scrollbar': {
        width: '6px',
        height: '6px',
        backgroundColor: '#F5F5F5',
      },
      '&::webkit-scrollbar-thumb': {
        backgroundColor: '#ddd',
        borderRadius: '50px',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.1)',
      },
      '&::webkit-scrollbar-thumb:hover': {
        backgroundColor: '#aaa',
      },
    },
  },
};

interface PropTypes {
  data: string[];
  disabled?: boolean;
  onChange?: Function;
  value?: any;
  error?: boolean;
  feedback?: string;
}

export default function MultipleSelect({ data, disabled }: PropTypes) {
  const [Values, setValues] = React.useState<string[]>(['All']);

  const handleChange = (event: SelectChangeEvent<typeof Values>) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleFilter = () => {
    // Handle search query
  };

  return (
    <div>
      <FormControl style={{ marginLeft: 0 }} sx={{ m: 1, width: '100%', height: '100%' }}>
        <Select
          disabled={disabled}
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={Values}
          onChange={handleChange}
          input={
            <OutlinedInput
              sx={{
                borderRadius: '50px',
                height: '40px',
                color: theme.colors.darkGrey,
                outlineColor: 'none !important',
                backgroundColor: theme.colors.white,
              }}
            />
          }
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          <MenuItem style={{ paddingLeft: 4, paddingRight: 4 }}>
            <SearchBoxSelect>
              <InputBase sx={{ p: '0' }} placeholder='Search Tags' onChange={handleFilter} />
              <IconButton>
                <SearchIcon
                  sx={{
                    color: theme.colors.darkGrey,
                  }}
                />
              </IconButton>
            </SearchBoxSelect>
          </MenuItem>
          {data.map(name => (
            <MenuItem key={name} value={name} sx={{ padding: '0' }}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                color='success'
                checked={Values.indexOf(name) > -1}
              />
              <ListItemTextStyled primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
