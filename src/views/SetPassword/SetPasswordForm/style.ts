import styled from 'styled-components';

export const DisableLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.4px;
  margin-top: -18px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
