import React from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';

import Button from '@/components/Button';
import VerificationCodeInput from '@/components/VerificationCodeInput'; // Import the VerificationCodeInput component
import EZError from '@/components/Error';

import { validationScheme } from './scheme';
import { FormContainer } from './styles';

interface PropTypes {
  onSubmitHandler: () => Promise<void>;
}

const initialValues = {
  confirmCode: '',
};

const ConsfirmOtpForm = ({ onSubmitHandler }: PropTypes) => {
  const { t } = useTranslation('common');

  const { touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validationScheme,
    onSubmit: onSubmitHandler,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <VerificationCodeInput
        name='confirmCode' // Add the name property
        onChange={handleChange}
        onBlur={handleBlur}
        onFinishInput={handleSubmit} // Assuming onFinishInput is used to submit the form
        error={!!(touched.confirmCode && errors.confirmCode)}
      />
      {errors && errors.confirmCode && <EZError>{errors.confirmCode}</EZError>}

      <Button dataTestId='submit-button' type='submit'>
        {t('confirmOTP.verify_phone')}
      </Button>
    </FormContainer>
  );
};

export default ConsfirmOtpForm;
