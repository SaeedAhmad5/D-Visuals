import { Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

export const StyledInput = styled(OutlinedInput)`
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.darkGrey};
  height: 100%;
  width: 100%;
`;

export const SearchBoxSelect = styled(Box)`
  display: flex;
  justify-content: space-between;
  border: 1.5px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  width: 100%;
`;

export const ListItemTextStyled = styled(ListItemText)`
  font-size: 0.9rem !important;
  font-weight: 400 !important;
  line-height: 1rem !important;
  letter-spacing: 0.25px !important;
  color: ${({ theme }) => theme.colors.black};
`;
