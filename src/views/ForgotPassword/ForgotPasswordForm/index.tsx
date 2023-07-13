import React from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';

import TextInput from '@/components/Input';
import Button from '@/components/Button';
import { selectIsAuthLoading } from '@/redux/slices/auth/selectors';
import { useAppSelector } from '@/redux';

import { FormContainer } from '../../Login/LoginForm/styles';

import { validationScheme } from './scheme';

/* eslint-disable */
interface PropTypes {
  onSubmitHandler: (values: any) => void;
}

const initialValues = {
  email: '',
};

const ForgotPasswordForm = ({ onSubmitHandler }: PropTypes) => {
  const { t } = useTranslation('common');

  const loading = useAppSelector(selectIsAuthLoading);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validationScheme,
    onSubmit: onSubmitHandler,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextInput
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={!!(touched.email && errors.email)}
        feedback={errors.email}
        label={t('login.email') || ''}
        required
        dataTestId='email-input'
      />

      <Button dataTestId='submit-button' type='submit' loading={loading}>
        {t('forgotPassword.btntext')}
      </Button>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
