import styled from 'styled-components';

export const CardWrapper = styled('div')`
  min-width: 15.6rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  border: 1px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 0.5rem 0.9rem 1.5rem 0.8rem;
`;

export const ScopeCardWrapper = styled(CardWrapper)`
  min-height: 5.4rem;
  padding-bottom: 1.3rem;
  border: none;
  min-width: 10.6rem;
`;
export const CardIcon = styled.div`
  & > svg {
    font-size: 65px;
    color: ${({ theme }) => theme.colors.lightGoblin};
  }
`;
export const CardContainer = styled(CardWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 3.4rem;
  padding-bottom: 10px;
`;
export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.25px;
    text-align: left;
  }
`;
export const CardBody = styled('div')<{ $green?: boolean }>`
  width: 100%;

  & > h5 {
    font-size: 30px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    font-family: Montserrat;
    color: ${({ theme, $green }) => ($green ? theme.colors.lightGreen : theme.colors.goblin)};

    & > label {
      color: ${({ theme }) => theme.colors.lightGreen};
    }

    & > span {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.25px;
      color: ${({ theme }) => theme.colors.darkPink};
    }
  }
  & > p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.colors.black};
  }
  &.full-width {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
  }
`;

export const ScopeCardBody = styled(CardBody)`
  flex-direction: column;
  width: 100%;
`;