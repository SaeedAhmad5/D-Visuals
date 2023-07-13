import * as React from 'react';

import {
  RadioStyle,
  StyledCustomRadioContainer,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormLabel,
  StyledRadioGroup,
} from './styles';

/* eslint-disable */
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
}

const RadioContainer: React.FC<Props> = ({ label, name, value, onChange, options }) => {
  return (
    <StyledCustomRadioContainer>
      <StyledFormControl>
        <StyledFormLabel>{label}</StyledFormLabel>
        <StyledRadioGroup aria-label={name} name={name} value={value} onChange={onChange} row>
          {options.map(option => (
            <StyledFormControlLabel
              key={option.value}
              value={option.value}
              control={<RadioStyle />}
              label={option.label}
            />
          ))}
        </StyledRadioGroup>
      </StyledFormControl>
    </StyledCustomRadioContainer>
  );
};

export default RadioContainer;
