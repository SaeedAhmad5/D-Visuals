import styled from 'styled-components';

import TextInput from '@/components/Input';
import { InputContainer } from '@/components/Input/styles';

export const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 120px;
  & > div > div > div > fieldset {
    border: none;
  }
  @media screen and (max-width: 1210px) {
    width: 150px;
  }
`;

export const LabelStyled = styled.label`
  font-family: 'Montserrat';
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.4;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
`;
export const StyledSearch = styled(TextInput)`
  width: 100%;
  max-width: auto;
  height: 40px !important;

  ${InputContainer} {
    background-color: white;
  }
`;
export const FilterBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 1210px) {
    flex-wrap: wrap;
  }
`;
export const SearchBox = styled.div`
  width: 21rem !important;
  flex-shrink: 0;
  display: flex;
  gap: 0 !important;
  flex-direction: column;
`;
