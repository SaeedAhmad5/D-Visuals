import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';

import TextInput from '@/components/Input';
import Button from '@/components/Button';
import { useSnack } from '@/hooks/snack';
import { useAppSelector } from '@/redux';
import { selectIsAuthLoading } from '@/redux/slices/auth/selectors';

import { FormContainer } from '../../Login/LoginForm/styles';

import { DisableLabel } from './style';
import { PasswordValidation } from './PasswordValidation/index';
import { validationScheme } from './scheme';

/* eslint-disable */
interface PropTypes {
  onSubmitHandler: (values: SetPasswordValues) => void;
  hideEmail?: boolean;
}

const initialValues = {
  password: '',
  confirmPassword: '',
};

export interface SetPasswordValues {
  password: string;
  confirmPassword: string;
}

const SetPasswordForm = ({ onSubmitHandler, hideEmail }: PropTypes) => {
  const { t } = useTranslation('common');

  const [strenth, setStrenth] = useState<number | null>(null);
  const loading = useAppSelector(selectIsAuthLoading);

  const { showSnack } = useSnack();

  const submitHandler = (values: SetPasswordValues) => {
    if (values.password !== values.confirmPassword) {
      showSnack({
        type: 'error',
        message: 'password_dont_match',
      });
      return;
    }
    if (strenth && strenth <= 2) {
      showSnack({
        type: 'error',
        message: 'password_weak',
      });
      return;
    }

    onSubmitHandler(values);
  };

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validationScheme,
    onSubmit: submitHandler,
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      {!hideEmail && (
        <>
          <TextInput
            name='email'
            value={'ahsanshiekh94@gmail.com'}
            label={t('setPassword.email') || ''}
            required
            disabled
            dataTestId='email-input'
          />
          <DisableLabel>{t('setPassword.label')}</DisableLabel>
        </>
      )}
      <TextInput
        label={t('setPassword.password') || ''}
        required
        name='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={!!(touched.password && errors.password)}
        feedback={errors.password}
        type='password'
        dataTestId='password-input'
      />
      <PasswordValidation onChange={(score: number) => setStrenth(score)} password={values.password} />
      <TextInput
        label={t('setPassword.confirmPassword') || ''}
        required
        name='confirmPassword'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        error={!!(touched.confirmPassword && errors.confirmPassword)}
        feedback={errors.confirmPassword}
        type='password'
        dataTestId='password-input'
      />
      <Button dataTestId='submit-button' type='submit' loading={loading}>
        {t('resetPassword.resetPassword')}
      </Button>
    </FormContainer>
  );
};

export default SetPasswordForm;
