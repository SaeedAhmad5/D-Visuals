import styled from 'styled-components';

import { FlexColumn, FlexRow } from '../styles';

export const InputContainer = styled(FlexRow)<{ $error?: boolean; $preventLeftPadding: boolean }>`
  height: 42px;
  width: 100%;
  border-radius: 50px;
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.errorLight : theme.colors.borderColor)};
  overflow: hidden;
  padding: 0 1rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  ${({ $preventLeftPadding }) =>
    $preventLeftPadding &&
    `
    padding-left: 0;
  `}

  & input[type='password'] {
    font: large Verdana, sans-serif;
  }
`;

export const Container = styled(FlexColumn)`
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 14px;

  & > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  background-color: transparent;

  &:focus {
    ${InputContainer} {
      border-color: ${({ theme }) => theme.colors.goblin} !important;
    }
  }
`;

export const BeforeContainer = styled(FlexColumn)`
  width: 10%;
  height: 100%;
`;

export const LabelContainer = styled(FlexRow)`
  padding: 0 4px;
  justify-content: space-between !important;
  width: 100%;
`;
export const FileInputLabel = styled.div``;
