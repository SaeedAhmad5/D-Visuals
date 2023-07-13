import { Checkbox, CheckboxProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { theme } from '@/styles/theme';

import { FlexRow } from '../styles';

const CheckBoxEl = styled(Checkbox)`
  width: 10px;
  height: 10px;
`;

const Label = styled.label`
  font-size: 16px;
`;

interface PropTypes extends CheckboxProps {
  label: string;
}

const CheckBox = ({ label, name, ...rest }: PropTypes) => {
  return (
    <FlexRow justifyContent='flex-start' gap='5px'>
      <CheckBoxEl
        sx={{
          '&.Mui-checked': {
            color: theme.colors.goblin,
          },
        }}
        name={name}
        id={rest.id}
        {...rest}
      ></CheckBoxEl>
      <Label htmlFor={rest.id}>{label}</Label>
    </FlexRow>
  );
};

export default CheckBox;
