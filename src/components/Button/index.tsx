import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const ButtonEl = styled.button`
  height: 42px;
  width: 100%;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.goblin};
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding-top: 1px;
`;

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  dataTestId?: string;
  loading?: boolean;
}

const Button = ({ children, dataTestId, loading, ...rest }: PropTypes) => {
  return (
    <ButtonEl data-testid={dataTestId} {...rest}>
      {loading ? <CircularProgress size={22} color='inherit' /> : children}
    </ButtonEl>
  );
};

export default Button;
