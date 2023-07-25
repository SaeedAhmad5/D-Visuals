import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';

export const CustomHeader = styled.h1`
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
`;

export const MainWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TableWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4rem;
  flex-wrap: wrap;
`;
export const ScopeCardsWrapper = styled(CardsWrapper)`
  width: 100%;
`;
export const FlexRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const CustomTabs = styled(Tabs)`
  & .MuiTab-root {
    text-transform: none;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid transparent;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.25px;
    gap: 0.7rem;
    min-height: 2.6rem !important;
  }

  & .MuiTab-root.Mui-selected {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    color: ${({ theme }) => theme.colors.goblin};
    background: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 1.5rem;
  }
`;
export const CustomTab = styled(Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TabImage = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  margin-bottom: 0 !important;
`;
export const ActionImage = styled.div`
  position: relative;
  height: 1.3rem;
  width: 1.3rem;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  & > button {
    font-size: 14px;
    border-radius: 20px;
    height: 37px;
  }
`;
export const ChartHead = styled.div`
  display: flex;
  align-items: center;
`;
export const OleCap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
