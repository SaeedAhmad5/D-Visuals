import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 42px 8px 16px;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: calc(100% - 325px);
  height: 75px;
  left: 325px;
  top: 0px;
  background: #fcf2e3;
  border-bottom: 1px solid #1b4001;
  z-index: 500;
`;

export const Searchbar = styled.input`
  padding: 7px 12px 7.5px;
  width: 60%;
  height: 41px;
  outline: none;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 1;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  & > p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;

    align-items: center;
    letter-spacing: 0.25px;

    color: ${({ theme }) => theme.colors.black};
  }
`;
