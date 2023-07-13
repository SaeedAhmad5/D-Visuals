import styled from 'styled-components';

export const CardWrapper = styled('div')`
  min-width: 15.6rem;
  width: 100%;
  min-height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};

  border: 1px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 0.5rem 0.5rem 1.5rem 0.8rem;
`;

export const CardsContainer = styled('div')<{ $large?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  ${({ $large }) =>
    $large &&
    `
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.25px;
    text-align: left;
  }
`;

export const LogoBox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const CardBody = styled.div`
  width: 100%;

  & > h5 {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.goblin};
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
