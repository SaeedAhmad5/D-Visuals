import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledStepper = styled(Stepper)({
  '& .MuiStepIcon-root': {
    width: '1.8rem',
    height: '1.8rem',
  },
  '& .MuiSvgIcon-root.MuiStepIcon-root': {
    fontSize: '1.8rem',
    color: '#969696',
  },
  '& .MuiSvgIcon-root.MuiStepIcon-root.Mui-active': {
    fontSize: '1.8rem',
    color: '#80CC28',
  },
  '& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed': {
    fontSize: '1.8rem',
    color: '#80CC28',
  },
  '& .MuiStepConnector-root': {
    display: 'block',
    left: 'calc(-50% + 15px)',
    right: 'calc(50% + 15px)',
  },
  '& .MuiStepConnector-line': {
    borderTopStyle: 'dashed',
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderTopStyle: 'solid',
    borderColor: '#80CC28',
  },
  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
    fontSize: '0.7rem',
    marginTop: '0.9rem',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: '#80CC28',
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: '#80CC28',
  },
});

interface StepperFormProps {
  activeStep: number;
  setStep: Function;
  step1: string;
  step2: string;
  secondStepReached: boolean;
}

const StepperForm: React.FC<StepperFormProps> = ({
  activeStep,
  step1,
  step2,
  setStep,
  secondStepReached,
}: StepperFormProps) => {
  return (
    <StyledStepper activeStep={activeStep} alternativeLabel>
      <Step onClick={() => setStep(0)}>
        <StepLabel>{step1}</StepLabel>
      </Step>
      <Step onClick={() => secondStepReached && setStep(1)}>
        <StepLabel>{step2}</StepLabel>
      </Step>
    </StyledStepper>
  );
};

export default StepperForm;
