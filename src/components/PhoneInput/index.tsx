import React, { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

import EZError from '../Error';
import 'react-phone-input-2/lib/style.css';

import { BeforeContainer, Container, Label, LabelContainer } from './styles';

const StyledPhoneInput = styled(PhoneInput)`
  &.react-tel-input .form-control {
    height: 42px !important;
    width: 100% !important;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding-left: 70px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &.react-tel-input .flag-dropdown {
    background: #fff;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    width: 60px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
  &.react-tel-input .selected-flag {
    background: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-right: none;
    width: 57px;
  }
  &.react-tel-input .selected-flag .flag {
    left: 23px;
  }
  &.react-tel-input .selected-flag .arrow {
    left: 22px;
  }
`;

interface PropTypes {
  label: string;
  error?: boolean;
  feedback?: string;
  afterLabelLink?: ReactNode;
  beforeEl?: ReactNode;
  onChange: Function;
  // onError: Function;
  value: string;
  name: string;
  rest?: InputHTMLAttributes<HTMLInputElement>;
}

const PhoneInputField = ({
  label,
  error,
  feedback,
  afterLabelLink,
  beforeEl,
  value,
  onChange,
  name,
  ...rest
}: PropTypes) => {
  const handlePhoneNumberChange = (value: string, data: any) => {
    if (onChange) {
      onChange(value, data.countryCode.toUpperCase());
    }
  };

  return (
    <Container>
      <LabelContainer>
        <Label>
          {label} <span>*</span>
        </Label>
        {afterLabelLink && afterLabelLink}
      </LabelContainer>
      {beforeEl && <BeforeContainer>{beforeEl}</BeforeContainer>}
      <StyledPhoneInput
        country={'us'}
        inputClass='phone-input' // Add custom CSS class for the input
        value={value}
        onChange={handlePhoneNumberChange}
        inputProps={{
          name,
        }}
        {...rest}
      />
      {error && feedback && <EZError>{feedback}</EZError>}
    </Container>
  );
};

export default PhoneInputField;
