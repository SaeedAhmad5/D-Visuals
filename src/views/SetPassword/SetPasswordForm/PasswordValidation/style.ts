import styled from 'styled-components';

export interface Props {
  password: string;
  onChange: Function;
}

export const FlexRow = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;
export interface BarProps {
  color?: string | null;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
  padding: 0 5px;
`;

export const Bar = styled.div<BarProps>`
  height: 5px;
  border-radius: 50px;
  background-color: ${props => props.color};
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.goblin};
`;
