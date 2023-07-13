import styled from 'styled-components';

import { FlexColumn } from '../../components/styles';

export const AuthPageContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  padding-top: 3rem;
`;

export const ContentContainer = styled(FlexColumn)`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;
  z-index: 10;
  margin-top: 2rem;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Logo = styled.div`
  height: 130px;
  width: 275px;
  flex-shrink: 0;
  position: relative;
`;

export const BottomText = styled.p`
  color: #dd7596;
  font-size: 4.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  z-index: 10;
  margin-top: 1rem;
  font-family: 'Gabriola';
  flex-shrink: 0;
`;

export const AuthImage = styled('div')<{
  $bottom?: string;
  $right?: string;
  $left?: string;
  $height?: string;
  $width?: string;
}>`
  position: absolute;
  height: ${({ $height }) => $height && `${$height}`};
  width: ${({ $width }) => $width && `${$width}`};
  left: ${({ $left }) => $left && `${$left}`};
  bottom: ${({ $bottom }) => $bottom && `${$bottom}`};
  right: ${({ $right }) => $right && `${$right}`};
`;
