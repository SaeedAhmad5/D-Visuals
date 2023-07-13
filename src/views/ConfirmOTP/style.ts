import styled from 'styled-components';

import { FlexRow } from '@/components/styles';

export const TextContainer = styled.div`
  & > h4 {
    font-size: 1.5rem;
    font-weight: normal;
    font-weight: 500;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.black};
  }

  & > p {
    font-size: 0.9rem;
    margin-top: 5px;
    font-weight: 400;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.25px;
  }
`;
export const PhoneNumberContainer = styled.div`
  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.lightGreen};
    letter-spacing: 0.1px;
  }
  & > button {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.colors.darkGrey};
    border: none;
    background: none;
    cursor: pointer;
  }
  display: flex;
  column-gap: 8px;
  margin-top: 8px;
`;

export const BottomTextContainer = styled(FlexRow)`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  gap: 4px;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  & > button {
    color: ${({ theme }) => theme.colors.darkGrey};
    border: none;
    background: none;
    cursor: pointer;
  }

  & > span {
    color: ${({ theme }) => theme.colors.goblin};
  }
`;

export const AuthImage = styled('div')<{
  $bottom?: string;
  $top?: string;
  $right?: string;
  $left?: string;
  $height?: string;
  $width?: string;
}>`
  position: absolute;
  height: ${({ $height }) => $height && `${$height}`};
  width: ${({ $width }) => $width && `${$width}`};
  left: ${({ $left }) => $left && `${$left}`};
  top: ${({ $top }) => $top && `${$top}`};
  bottom: ${({ $bottom }) => $bottom && `${$bottom}`};
  right: ${({ $right }) => $right && `${$right}`};
`;
