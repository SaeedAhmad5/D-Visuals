import styled from 'styled-components';

import { FlexRow } from '@/components/styles';

export const TextContainer = styled.div`
  & > h4 {
    font-size: 24px;
    font-weight: normal;
  }

  & > p {
    font-size: 15px;
    margin-top: 5px;
  }
`;

export const BottomTextContainer = styled(FlexRow)`
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  gap: 4px;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  & > p {
    color: ${({ theme }) => theme.colors.goblin};
  }

  & > a {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
