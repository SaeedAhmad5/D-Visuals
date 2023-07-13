import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 80px;
  background: #ececec;
  border-radius: 12px;
`;

export const LeftDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h6 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.15px;

    /* Black */
    color: ${({ theme }) => theme.colors.black};

    & > span {
      //styleName: Body;
      font-family: Source Sans Pro;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0.25px;
      text-align: left;
    }
  }
  & > p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const CustomTabs = styled(Tabs)`
  & .MuiTab-root {
    text-transform: none;
    color: ${({ theme }) => theme.colors.goblin};
    border: 1px solid transparent;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.25px;
    min-height: 2.6rem !important;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-collapse: collapse;
  }

  & .MuiTab-root.Mui-selected {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0px 6px 6px 0px;
    padding: 7px 13.125px 7px 12px;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.goblin};
    background: ${({ theme }) => theme.colors.goblin};
  }
`;
export const CustomTab = styled(Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
