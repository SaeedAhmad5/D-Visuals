import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.721rem 3.695rem 0 1rem;
`;
export const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;
export const HeadingWrapper = styled.div`
  display: grid;
  row-gap: 20px;
`;
export const Heading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.15px;
  color: #010101;
`;
export const ButtonSection = styled.div`
  display: flex;
  width: 44%;
  justify-content: flex-end;
`;
export const ButtonWrapper = styled.div`
  & > button {
    font-size: 14px;
    border-radius: 20px;
    height: 37px;
  }
`;
export const ExportButtonWrapper = styled.div`
  margin-right: 5%;
  & > button {
    font-size: 14px;
    border-radius: 20px;
    height: 37px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.goblin};
    border: 1px solid ${({ theme }) => theme.colors.goblin};
  }
`;

export const FlexRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
