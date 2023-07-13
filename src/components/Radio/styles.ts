import styled from 'styled-components';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const StyledFormLabel = styled(FormLabel)`
  font-size: 14px;
  color: #010101;
  box-sizing: border-box;
  font-family: 'SourceSansPro';
`;

export const StyledRadioGroup = styled(RadioGroup)`
  justify-content: space-between;
  max-width: 390px;
`;
export const RadioStyle = styled(Radio)`
  &.Mui-checked {
    color: #80cc28;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root .MuiFormControlLabel-label {
    font-size: 14px;
  }
`;

export const StyledCustomRadioContainer = styled.div`
  // add any styles you need for the container
`;
