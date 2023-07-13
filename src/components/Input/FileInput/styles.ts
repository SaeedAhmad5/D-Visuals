import styled from 'styled-components';

import { InputContainer } from '../styles';

export const Container = styled(InputContainer).attrs({
  as: 'div',
})<{ $small: boolean }>`
  width: 180px !important;
  min-height: 50px;
  height: unset;
  margin-top: -1rem;
  position: relative;
  flex-direction: column;
  cursor: pointer;

  ${({ $small }) =>
    $small &&
    `
    min-height: 30px;
    width: 150px !important;
  `}

  & input {
    display: none;
    position: absolute;
  }

  & > label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const IconContainer = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
`;

export const PreviewContainer = styled.div`
  height: 120px;
  width: 120px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  margin-top: -1rem;
`;
