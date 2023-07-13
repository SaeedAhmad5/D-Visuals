import styled from 'styled-components';

interface OneDigitInputProps {
  small?: boolean;
  squared?: boolean;
  isInvalid?: boolean;
}

export const OneDigitInput = styled.input<OneDigitInputProps>`
  height: ${({ small }) => (small ? '45px' : '70px')};
  width: ${({ small }) => (small ? '45px' : '76.5px')};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  outline: none;
  background: ${({ theme }) => theme.colors.borderColor};
  backdrop-filter: blur(41.9101px);
  will-change: transform;
  transform: translateZ(0);
  border-radius: ${({ squared }) => !squared && '8px'};
  margin: 1rem 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: bold;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ theme, isInvalid }) =>
    isInvalid &&
    `
    border: 2px solid ${theme.colors.error};
    color: ${theme.colors.error};
    animation: errorAnimation 0.3s linear;
   `}

 

  @keyframes errorAnimation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(35deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-35deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
