import styled from 'styled-components';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { EVENT_STATUS_UPCOMING, EVENT_STATUS_COMPLETED } from '@EventZeroHuddle/ts-constants/dist/events';

import { theme } from '@/styles/theme';

const STATUS_TO_COLORS: any = {
  [EVENT_STATUS_UPCOMING]: {
    color: theme.colors.black,
    background: theme.colors.borderColor,
  },
  [EVENT_STATUS_COMPLETED]: {
    color: theme.colors.goblin,
    background: theme.colors.lightGreen,
  },
};

export interface RowDataInterface {
  eventname: string;
  source: string;
  type: string;
  department: string;
  attendee: number;
  venuename: string;
  country: string;
  date: string;
  status: string;
  emission: number;
  action: string;
}
export const TableHeadStyled = styled(TableHead)`
  background-color: ${({ theme }) => theme.colors.borderColor};
`;

export const TableHeadCellStyled = styled(TableCell)`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.25px;
  text-align: left;
  color: black;
`;

export const TableRowCellStyled = styled(TableCell)<{ $isStatus?: boolean; $status?: string }>`
  & > p {
    font-size: 0.99rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.25px;
    text-align: left;
  }

  ${({ $isStatus, $status }) =>
    $isStatus &&
    `
     & > p {
      background-color: ${STATUS_TO_COLORS[$status || '']?.background};
      color: ${STATUS_TO_COLORS[$status || '']?.color};
      width: max-content;
      padding: 7px 13px;
      border-radius: 50px;
     }
  `}
`;

export const StatusCell = styled.div<{ status: string }>`
  border-radius: 16px;
  padding: 8px;
  color: ${props => (props.status === 'Open' ? 'black' : '#1B4001')};
  background-color: ${props => (props.status === 'Open' ? '#ECECEC' : '#80CC284D')};
`;

export const TableImage = styled('div')<{
  $bottom?: string;
  $right?: string;
  $left?: string;
  $height?: string;
  $width?: string;
  $top?: string;
}>`
  position: relative;
  height: ${({ $height }) => $height && `${$height}`};
  width: ${({ $width }) => $width && `${$width}`};
  left: ${({ $left }) => $left && `${$left}`};
  bottom: ${({ $bottom }) => $bottom && `${$bottom}`};
  right: ${({ $right }) => $right && `${$right}`};
  top: ${({ $top }) => $top && `${$top}`};
`;
